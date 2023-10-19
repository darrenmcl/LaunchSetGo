import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './HomePage';
import UserDashboard from './UserDashboard';
import ProfilePage from './ProfilePage.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default App;
