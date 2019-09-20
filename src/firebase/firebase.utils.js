import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDN2juUwTZvL1U3rAHYvGyzFezEwIgZd_4",
  authDomain: "shop-db-cf25e.firebaseapp.com",
  databaseURL: "https://shop-db-cf25e.firebaseio.com",
  projectId: "shop-db-cf25e",
  storageBucket: "",
  messagingSenderId: "963682686145",
  appId: "1:963682686145:web:be9d03dea0dc13fa51b040"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;