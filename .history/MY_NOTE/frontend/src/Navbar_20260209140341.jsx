import React from 'react';
import './navbar.css'
const Navbar = () => {





  return (
    <nav className="navbar">
      <h2 className="navbar-title">
        MyNote
      </h2>
      <div className="navbar-buttons">
        <button
          className="navbar-signin-btn"
        >
          Sign In
        </button>
        <button
          className="navbar-signup-btn"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
