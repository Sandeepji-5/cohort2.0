import React from 'react';
import './navbar.css'
const Navbar = ({ setSignUp, setSignIn }) => {
  return (
    <nav className="navbar">
      <h2 className="navbar-title">
        MyNote
      </h2>
      <div className="navbar-buttons">
        <button
          className="navbar-signin-btn"
          onClick={() => setSignIn(true)}
        >
          Sign In
        </button>
        <button
          className="navbar-signup-btn"
          onClick={() => setSignUp(true)}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
