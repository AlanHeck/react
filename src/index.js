import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  appId: "1:462513019958:web:b20d9adbc70864c0670c97",
  measurementId: "G-ZT20BXDB3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
