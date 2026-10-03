import type { User } from "firebase/auth";

export interface BillingAddressData {
  firstName: string;
  lastName: string;
  companyName?: string;
  streetAddress: string;
  country: string;
  state: string;
  zipCode: string;
  email: string;
  phone: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  phone?: string;
  avatar?: string;
  billingAddress?: BillingAddressData;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  loading: boolean;
  signIn: (
    email: string,
    password: string,
    remember?: boolean,
  ) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserProfile: (data: {
    firstName?: string;
    lastName?: string;
    phone?: string;
    avatar?: string | File;
  }) => Promise<void>;
  updateUserPassword: (
    currentPassword: string,
    newPassword: string,
  ) => Promise<void>;
  updateBillingAddress: (address: BillingAddressData) => Promise<void>;
}
