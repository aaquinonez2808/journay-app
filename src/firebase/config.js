// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNZKIW9yDHse-EkcV83UWaWDnvA9bjkNY",
  authDomain: "react-cursos-dfa84.firebaseapp.com",
  projectId: "react-cursos-dfa84",
  storageBucket: "react-cursos-dfa84.appspot.com",
  messagingSenderId: "940961693122",
  appId: "1:940961693122:web:7327a5f2502ac125f4aa5b"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);