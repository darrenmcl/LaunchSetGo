import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import './UserDashboard.css';


const firebaseConfig = {
    apiKey: "AIzaSyB9fzqzLlKy7m8qhk_qQa9RIYid9nPQ6h4",
    authDomain: "launch-set-go.firebaseapp.com",
    projectId: "launch-set-go",
    storageBucket: "launch-set-go.appspot.com",
    messagingSenderId: "408122065538",
    appId: "1:408122065538:web:c0ca13a5d944f08b33ea9b",
    measurementId: "G-J9615VMT93"
  };
  
  
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
  
    return (
      <div>
        {user ? (
          <div>
            <h1>Welcome, {user.email}!</h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <h1>Please log in to view your dashboard.</h1>
        )}
      </div>
    );
  };
  
  export default UserDashboard;