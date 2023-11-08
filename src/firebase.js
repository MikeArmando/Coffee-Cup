// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCaxDW7xsuW9mZKtZymcjEBkGhSuJ4zg1Y",
  authDomain: "coffeecup.firebaseapp.com",
  projectId: "coffeecup",
  storageBucket: "coffeecup.appspot.com",
  messagingSenderId: "75948145144",
  appId: "1:75948145144:web:c69c0074334ce39edbbe0d",
  measurementId: "G-R72VR0PBK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);