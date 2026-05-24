import React, { useState } from 'react';
import axios from 'axios';

import 
 function SignIn( ) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    if (!formData.email || !formData.password) {
      setMessage('Both fields are required.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:4000/api/auth/login',
        {
          email: formData.email,
          password: formData.password
        }
      );

      if (response.status === 200) {
        setMessage('Sign In Successful!');

        setFormData({ email: '', password: '' });
      } else {
        setMessage('Sign in failed. Please try again.');
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setMessage('User does not exist.');
        } else if (error.response.status === 401) {
          setMessage('Password incorrect.');
        } else {
          setMessage('Sign in failed. Please try again.');
        }
      } else {
        setMessage('Sign in failed. Please try again.');
      }
    }
  };

  return (
    <div style={{maxWidth:"400px",margin:"40px auto",padding:"24px",border:"1px solid #ddd",borderRadius:"8px"}}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div style={{marginBottom:"16px"}}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            style={{width:"100%",padding:"8px",marginTop:"4px"}}
          />
        </div>
        <div style={{marginBottom:"16px"}}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            style={{width:"100%",padding:"8px",marginTop:"4px"}}
          />
        </div>
        <button type="submit" style={{padding:"8px 16px"}}>Sign In</button>
      </form>
      {message && (
        <div style={{marginTop:"16px",color:"green"}}>
          {message}
        </div>
        
      )}
      <div className='forNote'>
        <p>Go For Notes...</p>
      </div>
    </div>
  );
}


export default SignIn