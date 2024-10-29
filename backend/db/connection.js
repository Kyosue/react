// backend/db/connection.js
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const mysql = require('mysql2');
import dotenv from 'dotenv';

dotenv.config();  // Load .env file

// Function to create a MySQL connection
export function createConnection() {
  return mysql.createConnection({
    host: process.env.DB_HOST,  // From .env
    user: process.env.DB_USER,  // From .env
    password: process.env.DB_PASSWORD,  // From .env
    database: process.env.DB_NAME,  // From .env
  });
}
