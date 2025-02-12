// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-WN86XTECvHdv7ewW6ybPAAKWwWYEzPU",
  authDomain: "portfolio-cac17.firebaseapp.com",
  projectId: "portfolio-cac17",
  storageBucket: "portfolio-cac17.firebasestorage.app",
  messagingSenderId: "621078996638",
  appId: "1:621078996638:web:aec0371fde8c3758923d8f",
  measurementId: "G-YRZPH7LXMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);