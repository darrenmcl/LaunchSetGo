import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebaseConfig';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create root
const root = document.getElementById('root');
const reactRoot = createRoot(root);

// Render App with createRoot
reactRoot.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig} firebaseApp={firebase.app()}>
    <App />
  </FirebaseAppProvider>
);



