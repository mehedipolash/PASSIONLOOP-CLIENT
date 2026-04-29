// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlI39Jni_oaLIX3wHKbs28nu3P5Dkk0aA",
  authDomain: "passionloop-b71a5.firebaseapp.com",
  projectId: "passionloop-b71a5",
  storageBucket: "passionloop-b71a5.firebasestorage.app",
  messagingSenderId: "1012030917213",
  appId: "1:1012030917213:web:cc8c2582c17c2c5723dbb4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);