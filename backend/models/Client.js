// backend/models/Client.js
import { createConnection } from '../db/connection.js';

export const Client = {
  create: (firstName, lastName, email, username, password_hash) => {
    const sql = 'INSERT INTO clients (firstName, lastName, email, username, password_hash) VALUES (?, ?, ?, ?, ?)';
    console.log('Preparing to insert client data:', [firstName, lastName, email, username, password_hash]);

    return new Promise((resolve, reject) => {
      const connection = createConnection();  // Ensure the connection is established here
      connection.query(sql, [firstName, lastName, email, username, password_hash], (err, result) => {
        if (err) {
          console.error('Error executing query:', err);  // Log the error details
          reject(err);  // Reject the promise with the error
        } else {
          console.log('Client successfully inserted:', result);
          resolve(result);  // Resolve the promise with the result
        }
      });
    });
  },

  findByUsername: (username) => {
    const sql = 'SELECT * FROM clients WHERE username = ?';
    return new Promise((resolve, reject) => {
      const connection = createConnection();  // Create the connection here
      connection.query(sql, [username], (err, result) => {
        if (err) {
          console.error('Error finding client by username:', err);  // Log the error details
          reject(err);  // Reject the promise with the error
        } else {
          resolve(result[0]);  // Resolve with the first result (assuming usernames are unique)
        }
      });
    });
  },
};
