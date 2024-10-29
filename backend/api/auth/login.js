// backend/api/auth/login.js
import express from 'express';
import { Client } from '../../models/Client.js';
import { Admin } from '../../models/Admin.js';
import { comparePassword } from '../../helpers/bcryptHelper.js';
import { generateToken } from '../../helpers/jwtHelper.js';

const router = express.Router();

// Define the login logic
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check for client
    const client = await Client.findByUsername(username);
    if (client) {
      const isMatch = await comparePassword(password, client.password_hash);
      if (isMatch) {
        const token = generateToken(client, 'client');
        return res.json({ token, role: 'client' });
      }
    }

    // Check for admin
    const admin = await Admin.findByUsername(username);
    if (admin) {
      const isMatch = await comparePassword(password, admin.password_hash);
      if (isMatch) {
        const token = generateToken(admin, 'admin');
        return res.json({ token, role: 'admin' });
      }
    }

    // If no match is found
    return res.status(401).json({ message: 'Invalid username or password' });
  } catch (err) {
    console.error('Error during login:', err);
    return res.status(500).json({ message: 'An error occurred during login' });
  }
});

export default router;  // This line ensures the router is exported as the default export
