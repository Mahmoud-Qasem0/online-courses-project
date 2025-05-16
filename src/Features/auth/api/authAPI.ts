import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import app from "../../../firebase";

const auth = getAuth(app);

// firebase login with email and password
export const login = async (email: string, password: string) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
};

// firebase register with email and password
export const register = async (email: string, password: string) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential;
};

// log out from app
export const logOut = async () => {
  await signOut(auth);
};

// user observation
export const observeUser = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// reset password
export const resetPassword = (email: string) => {
  return sendPasswordResetEmail(auth, email);
};

// update profile
export const updateUserEmail = (email: string) => {
  if (auth.currentUser) {
    return updateEmail(auth.currentUser, email);
  }
};
export const updateUserPassword = (password: string) => {
  if (auth.currentUser) {
    return updatePassword(auth.currentUser, password);
  }
};
