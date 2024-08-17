// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPKzHcw5H2hccLbf7lzzg_q-YydVyQLQA",
  authDomain: "metaldetect-59625.firebaseapp.com",
  projectId: "metaldetect-59625",
  storageBucket: "metaldetect-59625.appspot.com",
  messagingSenderId: "128603243572",
  appId: "1:128603243572:web:a4649b4330369f26c8f661",
  measurementId: "G-JKXJWHF9WN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
const analytics = getAnalytics(app);
