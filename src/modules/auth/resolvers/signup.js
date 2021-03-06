import { UserInputError } from'apollo-server-express';
import User from'../../../models/User';
import bcrypt from'bcrypt';

const SALT_ROUNDS = 12;

const signup = async (_, { email, password, username }) => {
  try {
    const existingUser = await User.findOne({
      email
    });

    if (existingUser) {
      throw new UserInputError('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    password = hashedPassword

    const user = await User.create({
      email,
      password,
      username
    });

    return {
      ...user._doc,
      id: user._id,
      hashedPassword: null
    };
  } catch (error) {
    throw error;
  }
};

export default signup;
