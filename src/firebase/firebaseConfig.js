import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB5JLQ8n7R8wS_-gjukGty-ICZ-YOIqOps",
    authDomain: "react-apps-3b14e.firebaseapp.com",
    projectId: "react-apps-3b14e",
    storageBucket: "react-apps-3b14e.appspot.com",
    messagingSenderId: "1039932301750",
    appId: "1:1039932301750:web:a5e1c7a7396fecd9832117"
  };
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}