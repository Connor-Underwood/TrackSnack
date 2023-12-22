// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3GjkGJcehVFN6hgWxV6D04sMHa2WwFdM",
  authDomain: "tracksnack-eb79a.firebaseapp.com",
  projectId: "tracksnack-eb79a",
  storageBucket: "tracksnack-eb79a.appspot.com",
  messagingSenderId: "398050866834",
  appId: "1:398050866834:web:c6b02bcf1066f42194584b",
  measurementId: "G-WEM2T3CQEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth};
