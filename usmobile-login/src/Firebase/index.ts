// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
import "firebase/auth";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBOmdaa7KMw-x2qmfSimIFONDUQq9zdLQg",
  authDomain: "login-83e9d.firebaseapp.com",
  databaseURL: "https://login-83e9d.firebaseio.com",
  projectId: "login-83e9d",
  storageBucket: "login-83e9d.appspot.com",
  messagingSenderId: "163466116838",
  appId: "1:163466116838:web:a7eb5a696e3f9ef9c04527",
  measurementId: "G-SJ5KMRL83Z",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const Auth = firebase.auth();
