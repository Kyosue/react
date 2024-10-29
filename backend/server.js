// backend/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './api/auth/login.js';
import registerRoutes from './api/auth/register.js';
import { createConnection } from './db/connection.js';  // Import the function from connection.js

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Establish database connection
const connection = createConnection();  // Use the imported function
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');

  // Create Admins table if it doesn't exist
  const createAdminsTable = `CREATE TABLE IF NOT EXISTS admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;

  connection.query(createAdminsTable, (err, result) => {
    if (err) {
      console.error('Error creating admins table:', err);
    } else {
      console.log('Admins table checked/created');
    }
  });

  // Create Clients table if it doesn't exist
  const createClientsTable = `CREATE TABLE IF NOT EXISTS clients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`;

  connection.query(createClientsTable, (err, result) => {
    if (err) {
      console.error('Error creating clients table:', err);
    } else {
      console.log('Clients table checked/created');
    }
  });
});

// Middleware and routes
app.use('/api/auth', authRoutes);
app.use('/api/auth', registerRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
