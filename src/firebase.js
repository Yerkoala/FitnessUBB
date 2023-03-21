import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzExr5sHnqG_F8gLB1WAEzt2ePWpDrHXA",
    authDomain: "fitnessubb-96aca.firebaseapp.com",
    projectId: "fitnessubb-96aca",
    storageBucket: "fitnessubb-96aca.appspot.com",
    messagingSenderId: "724548918464",
    appId: "1:724548918464:web:f7bf6d76c185b3d360a125"
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();