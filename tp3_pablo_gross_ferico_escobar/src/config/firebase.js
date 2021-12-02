// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiZOAOvONmBwQm7-cwszToWvIFyGh6Nbo",
  authDomain: "my-project1-48ddb.firebaseapp.com",
  projectId: "my-project1-48ddb",
  storageBucket: "my-project1-48ddb.appspot.com",
  messagingSenderId: "393264209750",
  appId: "1:393264209750:web:a2413431acd21e759240f7",
  measurementId: "G-4K0E4NWZLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);