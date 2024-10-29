// backend/helpers/bcryptHelper.js
import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = async (password) => {
  try {
    const hashed = await bcrypt.hash(password, saltRounds);
    return hashed;
  } catch (err) {
    console.error('Error hashing password:', err);
    throw err;  // Bubble up the error
  }
};


export const comparePassword = async (password, hash) => {
  return bcrypt.compare(password, hash);  // Compare plain password with the hash
};
