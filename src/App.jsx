import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';  // Keep Home as the default component
import LoginModal from './components/LoginModal';  // Assuming this is your login component
import ClientRoutes from './routes/ClientRoutes';  // Import client routes
import AdminRoutes from './routes/AdminRoutes';    // Import admin routes
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Home as the default component (when accessing "/") */}
          <Route path="/" element={<Home />} />

          {/* Login Route */}
          <Route path="/login" element={<LoginModal />} />

          {/* Client and Admin Routes */}
          <Route path="/*" element={<ClientRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
