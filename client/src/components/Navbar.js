import React from 'react';
import { Link } from 'react-router-dom'; 
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">DEV@Deakin</div>
        <input className="navbar-search" type="text" placeholder="Search..." />
        <div className="navbar-links">
          <span>Post</span>
          <Link to="/login">Login</Link> 
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
