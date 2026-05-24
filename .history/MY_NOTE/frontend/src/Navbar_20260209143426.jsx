import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">MyApp</h2>
      <div className="navbar-buttons">
        <Link to="/body" className="navbar-home-btn">HOME</Link>
        <Link to="/signin" className="navbar-signin-btn">Sign In</Link>
        <Link to="/signup" className="navbar-signup-btn">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
