// Import the functions you need from the SDKs 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMKE0iq6S0kjHr9LB8sA9LOqFvCPZAc5g",
  authDomain: "frontend-clone-8f17c.firebaseapp.com",
  projectId: "frontend-clone-8f17c",
  storageBucket: "frontend-clone-8f17c.appspot.com",
  messagingSenderId: "1028311406267",
  appId: "1:1028311406267:web:19572964f690296a97fb9e",
  measurementId: "G-9BD5GN0H9Z"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();

export {db, auth};