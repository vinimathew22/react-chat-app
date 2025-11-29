// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACIqgN9sVOLFQszPaPWJKY9iHVFBYgfOU",
  authDomain: "react-chat-app-41f9f.firebaseapp.com",
  projectId: "react-chat-app-41f9f",
  storageBucket: "react-chat-app-41f9f.firebasestorage.app",
  messagingSenderId: "41373013446",
  appId: "1:41373013446:web:473b82d967dfbd07a3cec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);