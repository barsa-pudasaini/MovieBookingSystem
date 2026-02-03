// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCH4WfgDAJxXYXLV8pGE9E73IM9QwoBv1g",
    authDomain: "moviebookingsystem-7ea47.firebaseapp.com",
    projectId: "moviebookingsystem-7ea47",
    storageBucket: "moviebookingsystem-7ea47.firebasestorage.app",
    messagingSenderId: "594023186764",
    appId: "1:594023186764:web:12272c658e9cf4a0678fe9",
    measurementId: "G-5C1ZRHZXQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);