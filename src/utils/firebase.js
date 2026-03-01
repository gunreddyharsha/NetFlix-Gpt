// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUecyWVB1tcbrBoiTedH-PWa1Ci_wBq_8",
  authDomain: "netflixgpt-b217c.firebaseapp.com",
  projectId: "netflixgpt-b217c",
  storageBucket: "netflixgpt-b217c.firebasestorage.app",
  messagingSenderId: "910202104626",
  appId: "1:910202104626:web:7c9bddb47468d70d68c52b",
  measurementId: "G-S3ZHY8RX8F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
