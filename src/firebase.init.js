// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcBYXtkEio4ll2_1rY0xdmNoXp2Vphlzc",
  authDomain: "simple-firebase-autencation.firebaseapp.com",
  projectId: "simple-firebase-autencation",
  storageBucket: "simple-firebase-autencation.appspot.com",
  messagingSenderId: "620077914059",
  appId: "1:620077914059:web:6052ef5de3836994c1484e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;