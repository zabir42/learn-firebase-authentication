// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4hugpaO6QsZe3xFd6u85EV9ZDmqoMfRI",
  authDomain: "guestbook-3c079.firebaseapp.com",
  projectId: "guestbook-3c079",
  storageBucket: "guestbook-3c079.appspot.com",
  messagingSenderId: "548104459395",
  appId: "1:548104459395:web:86452c80837f7d95c7b7b6",
  measurementId: "G-D85QZYT757",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const registerWithEmailAndPassword = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Registration error:", error.message);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return { success: true, user };
  } catch (error) {
    console.error("Login error:", error.message);
    return { success: false, error: error.message };
  }
};

const resetPasswordEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    // No explicit return statement
  } catch (error) {
    console.error("Password reset error:", error.message);
    // No explicit return statement
  }
};

export {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  resetPasswordEmail
};

