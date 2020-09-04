import { AuthenticationError } from 'apollo-server-express';
import tokenUtil from '../../../utils/context/token';
import User from '../../../models/User';
import bcrypt from 'bcrypt';
import * as config from '../../../config/config';

const login = async (_, { email, password }) => {
  const user = await User.findOne({
    email
  });

  if (!user) {
    throw new AuthenticationError('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new AuthenticationError('Incorrect password');
  }

  const token = tokenUtil.createToken(user._id);

  return {
    user: {
      ...user._doc,
      id: user._id
    },
    token,
    tokenExpiration: config.JWT_LIFETIME
  };
};

export default login;
