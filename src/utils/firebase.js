// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-cfb64.firebaseapp.com",
  projectId: "blog-cfb64",
  storageBucket: "blog-cfb64.appspot.com",
  messagingSenderId: "928218067021",
  appId: "1:928218067021:web:b616cded51ab7edd3d2c04"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);