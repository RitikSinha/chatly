import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBCmJ5rLLFihUfYlXvn4ir-AlICfkV0hOU",
  authDomain: "chatly-3a915.firebaseapp.com",
  projectId: "chatly-3a915",
  storageBucket: "chatly-3a915.appspot.com",
  messagingSenderId: "644192521979",
  appId: "1:644192521979:web:8ab28c637d16c0cdc1ea5e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export default app;
