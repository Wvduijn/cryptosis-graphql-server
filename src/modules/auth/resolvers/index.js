import me from './me';
import login from './login';
import signup from './signup';

const resolvers = {
  Query: {
    me
  },
  Mutation: {
    login,
    signup
  }
};

export default resolvers;
