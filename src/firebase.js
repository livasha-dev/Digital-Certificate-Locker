import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR7gdv__XakIUDtqd5fSdLJ6mHjAk7_Pk",
  authDomain: "digital-certificate-lock-cc497.firebaseapp.com",
  projectId: "digital-certificate-lock-cc497",
  storageBucket: "digital-certificate-lock-cc497.firebasestorage.app",
  messagingSenderId: "674066857817",
  appId: "1:674066857817:web:ea11b3e6aed7793d9e5648"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;