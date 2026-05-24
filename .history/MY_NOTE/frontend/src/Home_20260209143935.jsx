// Home.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Body from './Body';
import './home.css';

const Home = () => {
  return (
    <div className="home-root">
      <Router>
        <header className="home-header">
          <Navbar />
        </header>
        <main className="home-main">
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/body" element={<Body />} />
            <Route path="/" element={<Body />} />
            {/* अन्य रूट्स यहाँ आप जोड़ सकते हैं */}
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default Home;
