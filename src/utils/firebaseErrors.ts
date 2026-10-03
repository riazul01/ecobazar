export const getFriendlyErrorMessage = (error: unknown): string => {
  if (!error || typeof error !== "object") {
    return "An unexpected error occurred. Please try again.";
  }

  const firebaseError = error as { code?: string; message?: string };
  const code = firebaseError.code;

  switch (code) {
    case "auth/invalid-email":
      return "Invalid email address format.";
    case "auth/user-disabled":
      return "This account has been disabled. Please contact support.";
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/wrong-password":
      return "Incorrect password. Please try again.";
    case "auth/invalid-credential":
      return "Invalid email or password. Please try again.";
    case "auth/email-already-in-use":
      return "An account with this email already exists.";
    case "auth/operation-not-allowed":
      return "Email/Password sign-in is not enabled in Firebase Console.";
    case "auth/weak-password":
      return "Password is too weak. Please choose a stronger password.";
    case "auth/too-many-requests":
      return "Access to this account has been temporarily disabled due to many failed login attempts. Please try again later.";
    case "auth/network-request-failed":
      return "Network error. Please check your internet connection.";
    case "auth/requires-recent-login":
      return "This operation requires recent authentication. Please log in again and retry.";
    case "auth/popup-closed-by-user":
      return "Sign in popup was closed before completing.";
    default:
      return (
        firebaseError.message?.replace("Firebase: ", "") ||
        "An unexpected error occurred. Please try again."
      );
  }
};
