import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrfXTpTX11NbzYXEgQGr40CQFwsIqu0Es",
  authDomain: "ahad-77ab6.firebaseapp.com",
  projectId: "ahad-77ab6",
  storageBucket: "ahad-77ab6.appspot.com",
  messagingSenderId: "1082670794322",
  appId: "1:1082670794322:web:6d9085d165126e6999418b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
