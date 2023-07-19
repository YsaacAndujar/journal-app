import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDFXW2W2SNV0lmj8HJogeu267hdD2HR5WE",
    authDomain: "react-app-cursos.firebaseapp.com",
    databaseURL: "https://react-app-cursos.firebaseio.com",
    projectId: "react-app-cursos",
    storageBucket: "react-app-cursos.appspot.com",
    messagingSenderId: "959679322615",
    appId: "1:959679322615:web:89d8e604eee1b5fd68f6f2"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}