import React, { useState } from 'react';

function SignUp({ onSignupSuccess }) {
  const [formData, setFormData] = useState({
    name: '', 
    email: '', 
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // यहाँ आप साइन-अप की लॉजिक लगा दीजिए
    console.log('Signup form submitted:', formData);
    // साइन-अप सफल हुआ तो कॉलबैक चलाएं
    onSignupSuccess();
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
