import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6ADax4bQsSOsj7Xp4sIc7n-tdzachaDg",
  authDomain: "student-admin-a187e.firebaseapp.com",
  projectId: "student-admin-a187e",
  storageBucket: "student-admin-a187e.firebasestorage.app",
  messagingSenderId: "1091869318178",
  appId: "1:1091869318178:web:f4f13a90d505532ebefe7b",
  measurementId: "G-D56G5ESDER",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
