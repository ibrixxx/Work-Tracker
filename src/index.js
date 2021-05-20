import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase";
import("firebase/firestore");
const firebaseConfig = {
    apiKey: "AIzaSyDpYkaWmLinGl0jEtfNru5zUwbSJ9zgpbg",
    authDomain: "savvy-bit-299521.firebaseapp.com",
    projectId: "savvy-bit-299521",
    storageBucket: "savvy-bit-299521.appspot.com",
    messagingSenderId: "972557134652",
    appId: "1:972557134652:web:923c9a05f3cefcc4d00c39",
    measurementId: "G-WRGQ82P9RN"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
