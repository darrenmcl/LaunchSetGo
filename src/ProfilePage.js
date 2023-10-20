import React, { useState } from 'react';
import { firebaseConfig } from './firebaseConfig.js';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './ProfilePage.css';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

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
        const user = userCredential.user;
        db.collection('users').doc(user.uid).set({
          name,
          email,
        })
        .then(() => {
          setIsSubmitted(true);
        })
        .catch((error) => {
          console.error('Error adding user to database:', error);
        });
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  return (
    <div className="profile-page">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p>User created successfully!</p>}
    </div>
  );
}

export default ProfilePage;