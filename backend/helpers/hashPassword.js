// hashPassword.js
import bcrypt from 'bcrypt';

const saltRounds = 10; // Salt rounds for bcrypt
const plainPassword = 'qwe'; // Password to be hashed

bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hash); // Output the hashed password
  }
});
