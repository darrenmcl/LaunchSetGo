import React from 'react';
import Header from '../Header/index.js';  // Importing Header from the correct location
import './Layout.css';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />  {/* Header is part of Layout */}
    <main>{children}</main>
  </div>
);

export default Layout;



