import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCUwcNMBCz23a4W2UIk3oI6P_s4ZDN2glo",
  authDomain: "ecomerce-firebase-3ad53.firebaseapp.com",
  projectId: "ecomerce-firebase-3ad53",
  storageBucket: "ecomerce-firebase-3ad53.appspot.com",
  messagingSenderId: "154392596382",
  appId: "1:154392596382:web:d11f64f4ef5d602209108f",
  measurementId: "G-7MCKYXXKKS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export const auth = getAuth(app);
