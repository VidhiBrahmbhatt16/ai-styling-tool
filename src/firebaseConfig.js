// firebaseConfig.js
// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKvBp1b9s6JbBnSA4Nv3CFXXEn8R6iACM",
  authDomain: "viora-ai.firebaseapp.com",
  projectId: "viora-ai",
  storageBucket: "viora-ai.appspot.com",
  messagingSenderId: "1015818444485",
  appId: "1:1015818444485:web:4091a9905dd68df6b0daac",
  measurementId: "G-MZZ41HN831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

export default db; // Export Firestore instance
