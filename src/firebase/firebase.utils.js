import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCZgPojK34aQDhyjyPPEMqcr-FzDq0Fo7s",
  authDomain: "e-commerce-clothing-de1db.firebaseapp.com",
  databaseURL: "https://e-commerce-clothing-de1db.firebaseio.com",
  projectId: "e-commerce-clothing-de1db",
  storageBucket: "e-commerce-clothing-de1db.appspot.com",
  messagingSenderId: "1081392817016",
  appId: "1:1081392817016:web:6abe87bc70b8fd8e169e8d",
  measurementId: "G-V4XJMMCJPS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 