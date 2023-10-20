import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import './UserDashboard.css';
import { firebaseConfig } from './firebaseConfig.js';
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
  
const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/', { replace: true });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('Logged out successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.email}!</h1>
          <button onClick={handleLogout} className="goToProfileButton">Logout</button>
          <button onClick={goToProfile} className="goToProfileButton">Go to Profile</button>
        </div>
      ) : (
        <h1>Please log in to view your dashboard.</h1>
      )}
    </div>
  );
};
  
export default UserDashboard;
