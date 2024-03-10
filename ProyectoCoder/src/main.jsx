import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_tJCdLkCE_tXuZvcdTmekYunrqxtJBIM",
  authDomain: "primerproyecto-c5a8f.firebaseapp.com",
  projectId: "primerproyecto-c5a8f",
  storageBucket: "primerproyecto-c5a8f.appspot.com",
  messagingSenderId: "468561806174",
  appId: "1:468561806174:web:7e0cbf1acb2454bc4945cf",
  measurementId: "G-7HHMW3E8L7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
)
