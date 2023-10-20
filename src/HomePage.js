import React from 'react';
import LoginForm from './LoginForm.js';

const HomePage = () => {
    console.log("HomePage is rendering"); // Debug line
    return (
      <div>
        <h1>Welcome to Launch. Set. Go!</h1>
        <LoginForm />
        <h2>Thanks!</h2>
      </div>
    );
  };

export default HomePage;