// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfx9kaECmuT2GCcBv17eLQoGlHAXxJzQg",
  authDomain: "helios-a33ae.firebaseapp.com",
  projectId: "helios-a33ae",
  storageBucket: "helios-a33ae.appspot.com",
  messagingSenderId: "159173854104",
  appId: "1:159173854104:web:5842eca57b1d7c4762a1ed",
  measurementId: "G-NL8HJJ04DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);