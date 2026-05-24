import axios from 'axios';
import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
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
    if (!formData.name || !formData.email || !formData.password) {
      setMessage('All fields are required.');
      return;
    }

    const { name, email, password } = formData;

    try {
      const response = await axios.post('http://localhost:4000/api/auth/signup', {
        name: name,
        email: email,
        password: password
      });

      if (response.status === 200) {
        setMessage('Sign Up Successful!');
        setFormData({ name: '', email: '', password: '' });
      } else {
        setMessage('Sign up failed. Please try again.');
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setMessage('User already exists.');
      } else {
        setMessage('Sign up failed. Please try again.');
      }
    }
  };

  return (
    <div className="signup-container" style={{ maxWidth: '400px', margin: '2em auto', padding: '2em', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div style={{ marginBottom: '1em' }}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
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
          <div style={{ marginTop: '1em', color: message.toLowerCase().includes('successful') ? 'green' : 'red' }}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUp;
