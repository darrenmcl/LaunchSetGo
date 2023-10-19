import React, { useState } from 'react';
import firebase from 'firebase/app';
import { firebaseConfig } from './firebaseConfig.js';
import { initializeApp } from 'firebase/app';
import './ProfilePage.css';

const app = initializeApp(firebaseConfig);

function ProfilePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Save name and email to user's account
  };

  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
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