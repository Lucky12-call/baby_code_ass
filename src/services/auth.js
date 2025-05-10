import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export async function login(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function logout() {
  await signOut(auth);
}
