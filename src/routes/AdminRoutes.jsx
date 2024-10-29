import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../components/Admin/AdminDashboard';
import RoomManagement from '../components/Admin/RoomManagement';
import ReservationManagement from '../components/Admin/ReservationManagement';
import StaffManagement from '../components/Admin/StaffManagement';
import AdminNavbar from '../components/Admin/AdminNavbar'; // Import AdminNavbar

const AdminRoutes = () => {
  return (
    <div>
      <AdminNavbar /> {/* Navbar will always be displayed */}
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/dashboard/room-management" element={<RoomManagement />} />
        <Route path="/dashboard/reservation-management" element={<ReservationManagement />} />
        <Route path="/dashboard/staff-management" element={<StaffManagement />} />
      </Routes>
    </div>
  );
};

export default AdminRoutes;
