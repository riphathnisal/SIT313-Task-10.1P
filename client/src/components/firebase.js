import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyCWKeNa6wftQIEFxu1b4S2LkbZqHNwHXkI",
    authDomain: "deakin-web-app-fa230.firebaseapp.com",
    projectId: "deakin-web-app-fa230",
    storageBucket: "deakin-web-app-fa230.appspot.com",
    messagingSenderId: "808835249125",
    appId: "1:808835249125:web:f5a6a36488b70ae8a7f50c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (v9 modular)
export const db = getFirestore(app);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);
