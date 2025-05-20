// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2Pd4E0MwHpl4S2hwGZ7uCDJrduPRmZfI",
  authDomain: "hobbyhub-app.firebaseapp.com",
  projectId: "hobbyhub-app",
  storageBucket: "hobbyhub-app.firebasestorage.app",
  messagingSenderId: "1053385431368",
  appId: "1:1053385431368:web:402acfb6507adaee71fb7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);