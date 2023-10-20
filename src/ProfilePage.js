import React, { useState, useEffect } from 'react';
import { firebaseConfig } from './firebaseConfig.js';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import './ProfilePage.css';

const app = initializeApp(firebaseConfig);  // Make sure you're not initializing this multiple times across files
const db = getFirestore(app);
const auth = getAuth(app);

function ProfilePage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      } else {
        // Handle user not signed in
      }
    });

    return () => unsubscribe();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userDoc = doc(db, 'users', auth.currentUser.uid);
      await setDoc(userDoc, { name, email });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error adding user to database:', error);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="profile-page">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p>User updated successfully!</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default ProfilePage;



