import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => (
  <div className="nav-menu">
    <Link to="/dashboard" className="nav-item">Dashboard</Link>
    <Link to="/profile" className="nav-item">Profile</Link>
  </div>
);

export default NavMenu;

