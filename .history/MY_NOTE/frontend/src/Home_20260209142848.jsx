// Home.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Body from './Body'
const Home = () => {
  return (

    <>

<Router>
      <Navbar />
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/body'  element={<Body/>}/>
        {/* अन्य रूट्स यहाँ आप जोड़ सकते हैं */}  
      </Routes>
    </Router>




    </>
   
  );
};

export default Home;
