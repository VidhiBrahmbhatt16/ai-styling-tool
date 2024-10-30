// firebaseConfig.js
// src/firebaseConfig.js
// src/firebaseConfig.js
// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Add this if using Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyBKvBp1b9s6JbBnSA4Nv3CFXXEn8R6iACM",
  authDomain: "viora-ai.firebaseapp.com",
  projectId: "viora-ai",
  storageBucket: "viora-ai.appspot.com",
  messagingSenderId: "1015818444485",
  appId: "1:1015818444485:web:4091a9905dd68df6b0daac",
  measurementId: "G-MZZ41HN831"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app); // Use the same app instance

export { db, storage }; // Export both Firestore and Storage
