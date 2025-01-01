// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQHrK9oHh_pbVcXUHNFafHmBF3yyO22Y0",
  authDomain: "vite-contact-d60b2.firebaseapp.com",
  projectId: "vite-contact-d60b2",
  storageBucket: "vite-contact-d60b2.firebasestorage.app",
  messagingSenderId: "133804264257",
  appId: "1:133804264257:web:b30c4cf4fa1d6fcff0efc0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);