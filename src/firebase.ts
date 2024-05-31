// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrJ4IDAkleg6wFMUeC7ZYzkKeqM9MbB7s",
  authDomain: "nwitter-reloaded-62113.firebaseapp.com",
  projectId: "nwitter-reloaded-62113",
  storageBucket: "nwitter-reloaded-62113.appspot.com",
  messagingSenderId: "440594447348",
  appId: "1:440594447348:web:d22ce8dcf9e2da61c657a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
