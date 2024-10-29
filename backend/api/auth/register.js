// backend/api/auth/register.js
import express from 'express';
import { Client } from '../../models/Client.js';
import { hashPassword } from '../../helpers/bcryptHelper.js';

const router = express.Router();

// Define registration logic
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, username, password } = req.body;

  try {
    // Hash the password
    const password_hash = await hashPassword(password);

    // Save client to database
    await Client.create(firstName, lastName, email, username, password_hash);
    return res.json({ message: 'Registration successful' });
  } catch (err) {
    console.error('Error registering user:', err);
    return res.status(500).json({ message: 'Error registering user' });
  }
});

export default router;  // Ensure this is the default export
