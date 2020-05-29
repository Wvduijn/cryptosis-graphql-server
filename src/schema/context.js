import { AuthenticationError } from 'apollo-server-express';
import jwt from 'jsonwebtoken';

import * as models from '../models';
import { JWT_SECRET_KEY } from '../../config/config';

const context = ({ req }) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) return { ...models };

    const token = authorization.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET_KEY);

    return {
      ...models,
      loggedInUser: decoded.username
    };
  } catch (error) {
    console.log(error);
    throw new AuthenticationError('invalid token');
  }
};

module.exports = context;
