import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import './UserDashboard.css';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/', { replace: true });
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('Logged out successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {error && <p className="error-message">{error}</p>}
      {user ? (
        <div>
          <h1>Welcome, {user.email}!</h1>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <h1>Please log in to view your dashboard.</h1>
      )}
    </div>
  );
};

export default UserDashboard;

