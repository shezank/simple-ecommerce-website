// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHgNcX0jsPlxNvSrVMPPIsDxzysL7Phyk",
  authDomain: "aliexpressbd-edd3b.firebaseapp.com",
  projectId: "aliexpressbd-edd3b",
  storageBucket: "aliexpressbd-edd3b.appspot.com",
  messagingSenderId: "969671409650",
  appId: "1:969671409650:web:01a8e77ec7aed58468b56b"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

