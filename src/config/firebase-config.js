import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDTJfBX7Tik89F8pficaft47ZeqhRm7U4s",
  authDomain: "mike-montano.firebaseapp.com",
  projectId: "mike-montano",
  storageBucket: "mike-montano.appspot.com",
  messagingSenderId: "699062256141",
  appId: "1:699062256141:web:85f230103daf0ab3cc8b44"
};

const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app)