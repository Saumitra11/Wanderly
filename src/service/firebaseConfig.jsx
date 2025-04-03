// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9pHDw4eNoJXGsX_GG0CqsyeD4aqnO-BI",
  authDomain: "wanderly-b4489.firebaseapp.com",
  projectId: "wanderly-b4489",
  storageBucket: "wanderly-b4489.firebasestorage.app",
  messagingSenderId: "155944476125",
  appId: "1:155944476125:web:c67481fb15c27c3e32ea34",
  measurementId: "G-VYJH3J98B1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
