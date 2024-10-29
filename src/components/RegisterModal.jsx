import React, { useState } from 'react';

const RegisterModal = ({ onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation (optional)
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Create the user object
    const user = {
      firstName,
      lastName,
      birthdate,
      email,
      username,
      password,
    };

    try {
      // Send a POST request to the backend API
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      // Handle the response
      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred during registration');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={firstName} placeholder='First name' onChange={(e) => setFirstName(e.target.value)} />
          
          <input type="text" value={lastName} placeholder='Last name' onChange={(e) => setLastName(e.target.value)} />

          <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

          <input type="text" value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} />

          <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

          <input type="password" value={confirmPassword} placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />

          <button type="submit">Register</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default RegisterModal;
