import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/AdminNavbar.css';  // Assuming the CSS is in the same folder

const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <div className="navbar-container">
        {/* Hotel name on the left */}
        <div className="hotel-name">
          <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? 'active hotel-link' : 'hotel-link')}>
            Honest Hotel
          </NavLink>
        </div>

        {/* Links in the center */}
        <ul className="nav-links">
          <li>
            <NavLink to="/admin/dashboard/room-management" className={({ isActive }) => (isActive ? 'active' : '')}>
              Room Management
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard/reservation-management" className={({ isActive }) => (isActive ? 'active' : '')}>
              Reservation Management
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/dashboard/staff-management" className={({ isActive }) => (isActive ? 'active' : '')}>
              Staff Management
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default AdminNavbar;
