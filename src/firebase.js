import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAEoV9gQgA1vcU9aRCa0y5puX74Fg1CQt0",
  authDomain: "clone-b40e2.firebaseapp.com",
  projectId: "clone-b40e2",
  storageBucket: "clone-b40e2.appspot.com",
  messagingSenderId: "685343958225",
  appId: "1:685343958225:web:8ceaad40b579188bf5d1f0",
  measurementId: "G-4HDW85TYKM"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };