import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getMessaging } from "firebase/messaging";

// Initialize Firebase

const firebaseConfig = {
    apiKey: "AIzaSyDkieZcIMRukbAO5B8pvf3rpmgqt7YGMJ0",
    authDomain: "webcam-7d18e.firebaseapp.com",
    databaseURL: "https://webcam-7d18e-default-rtdb.firebaseio.com",
    projectId: "webcam-7d18e",
    storageBucket: "webcam-7d18e.appspot.com",
    messagingSenderId: "357663373695",
    appId: "1:357663373695:web:93c561bc8c46cdf2ca824a",
    measurementId: "G-7D6XPEMD2X"
  };

)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const messaging = getMessaging(app);
