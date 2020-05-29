import { AuthenticationError, ForbiddenError } from 'apollo-server-express';
import * as error from '../../error-messages';
import { User } from '../../models/index';
import { hashPassword } from '../../utils';

// resolver signature = (parent, args, context, info)

/*
== parent ==: 
The object that contains the result returned from the resolver on the parent field, or, in the case of a top-level Query field, the rootValue passed from the server configuration. 

== args ==: 
An object with the arguments passed into the field in the query.

== context ==: 
This is an object shared by all resolvers in a particular query, and is used to contain per-request state, including authentication information, dataloader instances, and anything else that should be taken into account when resolving the query.

== info ==: 
This argument contains information about the execution state of the query, including the field name, path to the field from the root, and more.
*/

const userResolver = {
  Query: {
    readUsers: (_, args, { loggedInUser, User }) => {
      if (!loggedInUser) throw new ForbiddenError(error.auth.failed);
      return User.find({});
    },
    readUser: (root, { id }, { loggedInUser, User }) => {
      if (!loggedInUser) throw new ForbiddenError(error.auth.failed);
      return User.findById(id);
    }
  },
  Mutation: {
    signup: async (_, { username, password, email }) => {
      try {
        // // Check if user doesn't exist allready
        const checkUniqueUser = await User.findOne({
          username: username
        });
        // throw error if user allready exists
        if (checkUniqueUser)
          throw new AuthenticationError(error.signup.invalidUsername);

        // create a new user with provided args
        const newUser = new User({
          username,
          email,
          password
        });
        // hash the password
        newUser.password = hashPassword(password);

        // Create the user and return it
        const user = await newUser.save();
        // #TODO: only return token
        return {
          id: user.id,
          username: user.username,
          email: user.email,
          token: user.getJWT()
        };
      } catch (error) {
        throw new Error(error);
      }
    },
    login: async (_, { username, password }, { User }) => {
      try {
            // // check if username or password is provided
            if (!username || !password)
              // throw error if not
              throw new AuthenticationError(
                error.signup.invalidUsernamePassword
              );
            const user = await User.findOne({ username });

            if (!user) throw new Error(error.login.noUserFound);
            if (!user.verifyPassword(password))
              throw new Error(error.login.noPasswordMatched);
            // #TODO only return token
            return {
              id: user.id,
              username: user.username,
              token: user.getJWT()
            };
          } catch (error) {
        throw new Error(error);
      }
    }
  }
};

export default userResolver
