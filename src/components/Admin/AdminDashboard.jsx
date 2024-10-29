import React from 'react';
import AdminNavbar from './AdminNavbar';  // Import the new AdminNavbar

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminNavbar />  {/* Add the AdminNavbar component here */}

      {/* Main Content */}
      <div className="dashboard-content">
        <h1>Admin Dashboard</h1>
        <p>Welcome to the admin dashboard. Use the navigation above to manage the hotel.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
