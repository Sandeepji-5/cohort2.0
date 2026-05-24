import axios from 'axios';
import React, { useState } from 'react'

export const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage('');
    // Dummy API placeholder, replace with real signup logic/API endpoint as needed.
    if (!formData.username || !formData.email || !formData.password) {
      setMessage('All fields are required.');
      return;
    }
    try {
      const {username, email, password} = formData
      console.log(email)
      // Simulate signup (add API call here as needed);
  await axios.post('http://localhost:4000/api/auth/signup', {
    name: username,
    email:email,
    password: password

  }).then(()=>res.status(200).json({
    message:"SignUp SuccessFull"
  }))

    } catch (err) {
      setMessage('Sign up failed. Please try again.');
    }
  };

  return (
    <div className="signup-container" style={{ maxWidth: '400px', margin: '2em auto', padding: '2em', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div style={{ marginBottom: '1em' }}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5em' }}
          />
        </div>
        <div style={{ marginBottom: '1em' }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5em' }}
          />
        </div>
        <div style={{ marginBottom: '1em' }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '0.5em' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '0.5em', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Sign Up
        </button>
        {message && (
          <div style={{ marginTop: '1em', color: message.includes('successful') ? 'green' : 'red' }}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUp
