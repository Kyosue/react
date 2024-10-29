import React, { useState } from 'react';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import '../css/Home.css';  // Assuming CSS is in the 'css' folder

const Home = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

  // Function to handle opening the login modal and closing the register modal
  const handleOpenLogin = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setLoginOpen(true);
    setRegisterOpen(false);
  };

  // Function to handle opening the register modal and closing the login modal
  const handleOpenRegister = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setRegisterOpen(true);
    setLoginOpen(false);
  };

  return (
    <div className="home">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><a href="#login" onClick={handleOpenLogin}>Login</a></li>
          <li><a href="#register" onClick={handleOpenRegister}>Register</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <h1>Welcome to Hotel Management System</h1>

      {/* Modals */}
      {isLoginOpen && <LoginModal onClose={() => setLoginOpen(false)} />}
      {isRegisterOpen && <RegisterModal onClose={() => setRegisterOpen(false)} />}
    </div>
  );
};

export default Home;
