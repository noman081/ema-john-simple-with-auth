// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLM0SNxpUvKWi4V6H5NyW6g5_gCTJo4h4",
    authDomain: "ema-john-authentication-ed21c.firebaseapp.com",
    projectId: "ema-john-authentication-ed21c",
    storageBucket: "ema-john-authentication-ed21c.appspot.com",
    messagingSenderId: "270022235764",
    appId: "1:270022235764:web:52c21548faf04afede2321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;