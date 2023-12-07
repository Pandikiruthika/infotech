import React, { useState } from 'react';
import axios from 'axios';

const CreateAccountForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/createAccount', formData);
      console.log(response.data); 
      alert("account created")
      window.location = "/";
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

      <label>Name:</label>
      <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

      <label>Password:</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} required /><br /><br />

      <label>Role:</label>
      <input type="text" name="role" value={formData.role} onChange={handleChange} required /><br />

      <button type="submit">Create Account</button>
    </form>
  );
};

export default CreateAccountForm;
