// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjx9ozeKcooXQwIJ0DUbPM4_mVekQvS9w",
  authDomain: "my-site-a3359.firebaseapp.com",
  projectId: "my-site-a3359",
  storageBucket: "my-site-a3359.appspot.com",
  messagingSenderId: "779118675657",
  appId: "1:779118675657:web:aac232952f57d7cf47af18",
  measurementId: "G-FHKSX9998Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
