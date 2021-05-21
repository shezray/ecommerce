import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const Configg = {
    apiKey: "AIzaSyCbbFl09yn0Rhh0mM8pR4_-QNThdVWnMCI",
    authDomain: "ecommerce-49850.firebaseapp.com",
    projectId: "ecommerce-49850",
    storageBucket: "ecommerce-49850.appspot.com",
    messagingSenderId: "1056642057900",
    appId: "1:1056642057900:web:bc886efb22d60551f70109",
    measurementId: "G-MG3PPMZZR6"
  }

  firebase.initializeApp(Configg);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;