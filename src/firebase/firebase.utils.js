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
  };

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch(error){
        console.log('error creating user', error.message)
      }
    }

return userRef;
}


  firebase.initializeApp(Configg);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;