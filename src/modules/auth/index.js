import authResolvers from './resolvers';
import authTypeDefs from './typeDefs';

const typeDefs = authTypeDefs;
const resolvers = authResolvers;

module.exports = {
  // typeDefs is an array, because it should be possible to split your schema if the schema grows to big, you can just export multiple here
  typeDefs: [typeDefs],
  resolvers
};
