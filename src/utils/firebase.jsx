// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5d96ZBhmdckokYqfSoOKOnQVAxku5r08",
  authDomain: "netflixgpt-f6a61.firebaseapp.com",
  projectId: "netflixgpt-f6a61",
  storageBucket: "netflixgpt-f6a61.firebasestorage.app",
  messagingSenderId: "919837648450",
  appId: "1:919837648450:web:0f8e9a648f6f99ef69efdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();