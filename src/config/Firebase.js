// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    //apiKey: "AIzaSyCH4WfgDAJxXYXLV8pGE9E73IM9QwoBv1g",
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
   // authDomain: "moviebookingsystem-7ea47.firebaseapp.com",
   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    // projectId: "moviebookingsystem-7ea47",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    // storageBucket: "moviebookingsystem-7ea47.firebasestorage.app",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
   // messagingSenderId: "594023186764",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
   // appId: "1:594023186764:web:12272c658e9cf4a0678fe9",
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
   // measurementId: "G-5C1ZRHZXQN"
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);