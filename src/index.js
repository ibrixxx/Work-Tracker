import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";
import("firebase/firestore");
const firebaseConfig = {
    apiKey: "***",
    authDomain: "savvy-bit-299521.firebaseapp.com",
    projectId: "***",
    storageBucket: "savvy-bit-299521.appspot.com",
    messagingSenderId: "***",
    appId: "***",
    measurementId: "***"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
