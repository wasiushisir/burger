// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH1B7UwQbRGZuB5wZKK7hD6Van16XxFJ0",
  authDomain: "burger-hut-ff8df.firebaseapp.com",
  projectId: "burger-hut-ff8df",
  storageBucket: "burger-hut-ff8df.appspot.com",
  messagingSenderId: "820774330398",
  appId: "1:820774330398:web:9f893f282ab520d49b0e0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;