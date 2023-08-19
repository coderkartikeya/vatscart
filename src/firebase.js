// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJyG6uZwY8NW1cmLathQvjay5CLiqdUQk",
    authDomain: "ecommerce-website-a1d60.firebaseapp.com",
    projectId: "ecommerce-website-a1d60",
    storageBucket: "ecommerce-website-a1d60.appspot.com",
    messagingSenderId: "798457109050",
    appId: "1:798457109050:web:c5e5d3c0b9dc9d56e77303",
    measurementId: "G-BDCNGSMMZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);