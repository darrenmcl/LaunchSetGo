import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig} firebaseApp={firebase.app()}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById('root')
);

