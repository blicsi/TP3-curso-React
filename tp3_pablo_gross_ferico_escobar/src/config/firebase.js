import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"


const firebaseConfig = {

  apiKey: "AIzaSyBdsw1-aLbjWJYpvBkxrEmBCJ3egS4O7u4",

  authDomain: "neon-rampart-258902.firebaseapp.com",

  projectId: "neon-rampart-258902",

  storageBucket: "neon-rampart-258902.appspot.com",

  messagingSenderId: "1074390870868",

  appId: "1:1074390870868:web:f19ddaeb84db41ed9e36c1"

};

firebase.initializeApp(firebaseConfig);

firebase.db= firebase.firestore();
firebase.auth=firebase.auth()

export default firebase