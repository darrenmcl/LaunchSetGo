import React from 'react';
import LoginForm from './LoginForm.js';
import './HomePage.css';  // Import the CSS

const HomePage = () => {
  return (
    <div className="container">
      <h1>Are you <b>ready</b> for takeoff?</h1>
      <LoginForm />
    </div>
  );
};

export default HomePage;


