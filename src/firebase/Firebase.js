// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3Efx2yc2CUMryw-1Da63CQrvbGq3Kpr8",
  authDomain: "mi-primer-react-444a3.firebaseapp.com",
  projectId: "mi-primer-react-444a3",
  storageBucket: "mi-primer-react-444a3.appspot.com",
  messagingSenderId: "462513019958",
  appId: "1:462513019958:web:60dbbed41f1be295670c97",
  measurementId: "G-RG80L4XSN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
