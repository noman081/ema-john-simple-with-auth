// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDfHgeldDE_Xce5mklzGpv2QpC47NQ94_E",
    authDomain: "ema-john-authentication-3bfb3.firebaseapp.com",
    projectId: "ema-john-authentication-3bfb3",
    storageBucket: "ema-john-authentication-3bfb3.appspot.com",
    messagingSenderId: "999195706911",
    appId: "1:999195706911:web:896b69287800e403cfb72a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;