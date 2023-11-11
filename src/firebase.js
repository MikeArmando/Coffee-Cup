// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAygCpRCY1ddV3ThuPUgwZZ83HzPxqgZus",
  authDomain: "WebPages.firebaseapp.com",
  projectId: "WebPages",
  storageBucket: "WebPages.appspot.com",
  messagingSenderId: "98427174910",
  appId: "1:98427174910:web:aa8d7138eb8e494a448aaf",
  measurementId: "G-WTVJ18HJMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);