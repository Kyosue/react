// backend/models/Admin.js
import { createConnection } from '../db/connection.js';

export const Admin = {
  create: (username, password_hash) => {
    const sql = 'INSERT INTO admins (username, password_hash) VALUES (?, ?)';
    return new Promise((resolve, reject) => {
      const connection = createConnection();  // Ensure the connection is established here
      connection.query(sql, [username, password_hash], (err, result) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  },

  findByUsername: (username) => {
    const sql = 'SELECT * FROM admins WHERE username = ?';  // Updated to use 'username'
    return new Promise((resolve, reject) => {
      const connection = createConnection();  // Create the connection here
      connection.query(sql, [username], (err, result) => {
        if (err) reject(err);
        resolve(result[0]);  // Resolve with the first result (assuming usernames are unique)
      });
    });
  },
};
