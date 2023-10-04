// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAVMOCkREVNqFE0KCudwtut4V4ngp6XbU",
    authDomain: "dragon-news-8157f.firebaseapp.com",
    projectId: "dragon-news-8157f",
    storageBucket: "dragon-news-8157f.appspot.com",
    messagingSenderId: "111068810073",
    appId: "1:111068810073:web:6e83110dce56887f621a48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;