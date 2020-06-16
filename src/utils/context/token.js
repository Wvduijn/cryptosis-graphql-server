import jwt from 'jsonwebtoken';
import { JWT_LIFETIME, JWT_SECRET } from '../../config/config';

// CREATE TOKEN
const createToken = userId =>
  new Promise((resolve, reject) => {
    jwt.sign(
      {
        userId
      },
      JWT_SECRET,
      {
        expiresIn: JWT_LIFETIME
      },
      (error, token) => {
        if (error) {
          return reject(error);
        }
        resolve(token);
      }
    );
  });
// DECODE TOKEN
const getDecodedToken = token =>
  new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (error, decodedToken) => {
      if (error) {
        return reject(error);
      }
      if (!decodedToken.exp || !decodedToken.iat) {
        return reject(new Error(`Token had no 'exp' or 'iat' payload`));
      }
      resolve(decodedToken);
    });
  });
module.exports = {
  createToken,
  getDecodedToken
};
