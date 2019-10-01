import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAzlytv6igQr_5erdNdwlrGBE2fq0IO5C8",
    authDomain: "majestic-db.firebaseapp.com",
    databaseURL: "https://majestic-db.firebaseio.com",
    projectId: "majestic-db",
    storageBucket: "",
    messagingSenderId: "544390932906",
    appId: "1:544390932906:web:ae3db573196cf61fd263d3",
    measurementId: "G-8M95Z37LPB"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const providers = new firebase.auth.GoogleAuthProvider();
  providers.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(providers);

  export default firebase;