import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDiZOAOvONmBwQm7-cwszToWvIFyGh6Nbo",
  authDomain: "my-project1-48ddb.firebaseapp.com",
  projectId: "my-project1-48ddb",
  storageBucket: "my-project1-48ddb.appspot.com",
  messagingSenderId: "393264209750",
  appId: "1:393264209750:web:a2413431acd21e759240f7",
  measurementId: "G-4K0E4NWZLM"
};

firebase.initializeApp(firebaseConfig);

firebase.db= firebase.firestore();
firebase.auth=firebase.auth()

export default firebase