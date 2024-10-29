import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ClientDashboard from '../components/Client/ClientDashboard'; // Import ClientDashboard component

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<ClientDashboard />} />
    </Routes>
  );
};

export default ClientRoutes;
