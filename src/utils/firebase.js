// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVFDaSsUmQv2jJpf0Vn6KN0iHtrJHd9n0",
  authDomain: "netflixgpt-38935.firebaseapp.com",
  projectId: "netflixgpt-38935",
  storageBucket: "netflixgpt-38935.appspot.com",
  messagingSenderId: "122642280884",
  appId: "1:122642280884:web:9bccccf4e4638f7c9682e1",
  measurementId: "G-EG177E8X6C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
