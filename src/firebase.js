// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCP4VFhSbv4J3I376unnW4zvZTC0HGYWyI",
    authDomain: "praktyka-lekarska-licencjat.firebaseapp.com",
    projectId: "praktyka-lekarska-licencjat",
    storageBucket: "praktyka-lekarska-licencjat.appspot.com",
    messagingSenderId: "708710047380",
    appId: "1:708710047380:web:82c5ef97fe5aeadedc1e81",
    measurementId: "G-X2X5FMEF3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};