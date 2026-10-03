import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  type User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  sendPasswordResetEmail,
  updateProfile,
  updatePassword as firebaseUpdatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "firebase.ts";
import type {
  AuthContextType,
  UserProfile,
  BillingAddressData,
} from "types/auth";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

interface AuthProviderProps {
  children: ReactNode;
}

// Utility to remove all undefined fields before saving to Firestore
const sanitizeForFirestore = (obj: object): Record<string, unknown> => {
  return JSON.parse(JSON.stringify(obj));
};

// Helper to compress and convert image files to optimized base64 for Firestore storage
const compressImageToBase64 = (
  file: File,
  maxWidth = 300,
  maxHeight = 300,
  quality = 0.8,
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL("image/jpeg", quality));
        } else {
          resolve(event.target?.result as string);
        }
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Sync profile data helper from Firestore
  const fetchOrInitProfile = async (
    firebaseUser: User,
  ): Promise<UserProfile> => {
    const userDocRef = doc(db, "users", firebaseUser.uid);
    let userProfileData: Partial<UserProfile> = {};

    try {
      const docSnap = await getDoc(userDocRef);
      if (docSnap.exists()) {
        userProfileData = docSnap.data() as UserProfile;
      }
    } catch (err) {
      console.warn("Firestore user profile fetch warning:", err);
    }

    const displayNameParts = (firebaseUser.displayName || "").trim().split(" ");
    const firstName =
      userProfileData.firstName ||
      (displayNameParts[0] ? displayNameParts[0] : "");
    const lastName =
      userProfileData.lastName ||
      (displayNameParts.length > 1 ? displayNameParts.slice(1).join(" ") : "");

    const finalProfile: UserProfile = {
      uid: firebaseUser.uid,
      email: firebaseUser.email || "",
      firstName,
      lastName,
      displayName:
        userProfileData.displayName ||
        firebaseUser.displayName ||
        `${firstName} ${lastName}`.trim(),
      role: userProfileData.role || "customer",
      phone: userProfileData.phone || "",
      avatar: userProfileData.avatar || firebaseUser.photoURL || "",
      ...(userProfileData.billingAddress
        ? { billingAddress: userProfileData.billingAddress }
        : {}),
      createdAt: userProfileData.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    try {
      await setDoc(userDocRef, sanitizeForFirestore(finalProfile), {
        merge: true,
      });
    } catch (err) {
      console.warn("Firestore profile sync warning:", err);
    }

    return finalProfile;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        try {
          const userProf = await fetchOrInitProfile(currentUser);
          setProfile(userProf);
        } catch {
          setProfile({
            uid: currentUser.uid,
            email: currentUser.email || "",
            firstName: currentUser.displayName?.split(" ")[0] || "",
            lastName:
              currentUser.displayName?.split(" ").slice(1).join(" ") || "",
            displayName: currentUser.displayName || "",
            avatar: currentUser.photoURL || "",
          });
        }
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (
    email: string,
    password: string,
    remember: boolean = false,
  ) => {
    await setPersistence(
      auth,
      remember ? browserLocalPersistence : browserSessionPersistence,
    );
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const userProf = await fetchOrInitProfile(userCredential.user);
    setProfile(userProf);
  };

  const signUp = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const userProf = await fetchOrInitProfile(userCredential.user);
    setProfile(userProf);
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
    setUser(null);
    setProfile(null);
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  const updateUserProfile = async (data: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    avatar?: string | File;
  }) => {
    if (!auth.currentUser || !user) {
      throw new Error("No authenticated user found");
    }

    const currentUid = auth.currentUser.uid;
    let avatarUrl =
      typeof data.avatar === "string" ? data.avatar : profile?.avatar || "";

    if (data.avatar instanceof File) {
      try {
        avatarUrl = await compressImageToBase64(data.avatar);
      } catch (uploadError) {
        console.warn("Base64 image conversion error:", uploadError);
      }
    }

    const updatedFirstName =
      data.firstName !== undefined ? data.firstName : profile?.firstName || "";
    const updatedLastName =
      data.lastName !== undefined ? data.lastName : profile?.lastName || "";
    const updatedDisplayName = `${updatedFirstName} ${updatedLastName}`.trim();

    // Update Firebase Auth profile
    try {
      await updateProfile(auth.currentUser, {
        displayName: updatedDisplayName,
      });
    } catch (authErr) {
      console.warn("Firebase Auth displayName update warning:", authErr);
    }

    const updatedProfile: UserProfile = {
      ...(profile || {
        uid: currentUid,
        email: auth.currentUser.email || "",
      }),
      firstName: updatedFirstName,
      lastName: updatedLastName,
      displayName: updatedDisplayName,
      role: profile?.role || "customer",
      phone: data.phone !== undefined ? data.phone : profile?.phone || "",
      avatar: avatarUrl,
      updatedAt: new Date().toISOString(),
    };

    // Store directly in Firestore document (sanitizing away any undefined fields)
    const userDocRef = doc(db, "users", currentUid);
    await setDoc(userDocRef, sanitizeForFirestore(updatedProfile), {
      merge: true,
    });

    setProfile(updatedProfile);
  };

  const updateUserPassword = async (
    currentPassword: string,
    newPassword: string,
  ) => {
    const currentUser = auth.currentUser;
    if (!currentUser || !currentUser.email) {
      throw new Error("No authenticated user found");
    }

    const credential = EmailAuthProvider.credential(
      currentUser.email,
      currentPassword,
    );
    await reauthenticateWithCredential(currentUser, credential);
    await firebaseUpdatePassword(currentUser, newPassword);
  };

  const updateBillingAddress = async (address: BillingAddressData) => {
    if (!auth.currentUser || !user) {
      throw new Error("No authenticated user found");
    }

    const currentUid = auth.currentUser.uid;
    const updatedProfile: UserProfile = {
      ...(profile || {
        uid: currentUid,
        email: auth.currentUser.email || "",
        firstName: "",
        lastName: "",
        displayName: "",
      }),
      billingAddress: address,
      updatedAt: new Date().toISOString(),
    };

    const userDocRef = doc(db, "users", currentUid);
    try {
      await updateDoc(userDocRef, {
        billingAddress: sanitizeForFirestore(address),
        updatedAt: new Date().toISOString(),
      });
    } catch (err) {
      console.warn("Firestore billing update warning:", err);
      await setDoc(userDocRef, sanitizeForFirestore(updatedProfile), {
        merge: true,
      });
    }

    setProfile(updatedProfile);
  };

  const isAdmin = profile?.role === "admin";

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isAdmin,
        loading,
        signIn,
        signUp,
        signOut,
        resetPassword,
        updateUserProfile,
        updateUserPassword,
        updateBillingAddress,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
