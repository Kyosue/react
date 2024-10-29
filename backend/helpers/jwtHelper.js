// backend/helpers/jwtHelper.js
import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

export const generateToken = (user, role) => {
  return jwt.sign({ id: user.id, role }, secret, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
};
