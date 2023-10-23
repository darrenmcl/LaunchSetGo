import React from 'react';
import './NavMenu.css'; // Import styles

const NavMenu = () => {
  const handleLogout = () => {
    // Logout logic here
    console.log("Logged out");
  };

  return (
    <div className="nav-menu">
      <span>Menu</span>
      <div className="menu-container">
        <a className="nav-item" href="/dashboard">Dashboard</a>
        <a className="nav-item" href="/profile">Profile</a>
        <button className="nav-item" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default NavMenu;





