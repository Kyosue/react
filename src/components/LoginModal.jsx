import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use navigate for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { username, password };

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();
      
      // Add logging to see the response and role
      console.log('Login response:', data);
      console.log('Role from response:', data.role);

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.role);

        // Redirect based on user role
        if (data.role === 'client') {
          console.log('Redirecting to client dashboard...');
          navigate('/dashboard');  // Redirect to client dashboard
        } else if (data.role === 'admin') {
          console.log('Redirecting to admin dashboard...');
          navigate('/admin/dashboard');  // Redirect to admin dashboard
        } else {
          console.log('Unknown role:', data.role);
        }
      } else {
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
          
          <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />

          <button type="submit">Login</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default LoginModal;
