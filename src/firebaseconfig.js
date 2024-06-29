// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsbWUPtr1YPD5KRVq0zt_LMB9nL111cTg",
  authDomain: "loginsignup-92d16.firebaseapp.com",
  projectId: "loginsignup-92d16",
  storageBucket: "loginsignup-92d16.appspot.com",
  messagingSenderId: "1067093250763",
  appId: "1:1067093250763:web:e8afee0317797d66e2014e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app,auth};//