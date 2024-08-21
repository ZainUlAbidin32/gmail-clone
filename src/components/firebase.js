import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3vrdUtb6DYUrzAJd2pwaJXnIH-xqkjqI",
    authDomain: "clone-e4187.firebaseapp.com",
    projectId: "clone-e4187",
    storageBucket: "clone-e4187.appspot.com",
    messagingSenderId: "130795685791",
    appId: "1:130795685791:web:564f3880609cb7e3d21faa",
    measurementId: "G-W7TRJYE683"
  };
  
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth= firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};