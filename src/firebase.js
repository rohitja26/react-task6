
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyBCvOVW2gRAZaffAmzgHzAcdMI9cR2tPPE",
     authDomain: "react-task-6-5654c.firebaseapp.com",
     databaseURL: "https://react-task-6-5654c-default-rtdb.asia-southeast1.firebasedatabase.app",
     projectId: "react-task-6-5654c",
     storageBucket: "react-task-6-5654c.appspot.com",
     messagingSenderId: "717907442837",
     appId: "1:717907442837:web:12e2dee2632ba5d9e4ef9c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);