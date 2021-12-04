<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
=======
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"

>>>>>>> 312ca9719d1e8c4b38b4d1a0b6d4f9072884d7e5

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyDiZOAOvONmBwQm7-cwszToWvIFyGh6Nbo",
  authDomain: "my-project1-48ddb.firebaseapp.com",
  projectId: "my-project1-48ddb",
  storageBucket: "my-project1-48ddb.appspot.com",
  messagingSenderId: "393264209750",
  appId: "1:393264209750:web:a2413431acd21e759240f7",
  measurementId: "G-4K0E4NWZLM"
=======

  apiKey: "AIzaSyBdsw1-aLbjWJYpvBkxrEmBCJ3egS4O7u4",

  authDomain: "neon-rampart-258902.firebaseapp.com",

  projectId: "neon-rampart-258902",

  storageBucket: "neon-rampart-258902.appspot.com",

  messagingSenderId: "1074390870868",

  appId: "1:1074390870868:web:f19ddaeb84db41ed9e36c1"

>>>>>>> 312ca9719d1e8c4b38b4d1a0b6d4f9072884d7e5
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);