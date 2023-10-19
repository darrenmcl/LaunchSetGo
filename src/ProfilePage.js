import React, { useState } from 'react';
import firebase from 'firebase/app';
import { firebaseConfig } from './firebaseConfig.js';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './ProfilePage.css';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function ProfilePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, 'password')
      .then((userCredential) => {
        // TODO: Save name and email to user's account
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      {isSubmitted && <p>Successfully registered!</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ProfilePage;