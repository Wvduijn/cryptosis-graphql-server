import marketResolvers from './resolvers';
import marketTypeDefs from './typeDefs';

const typeDefs = marketTypeDefs;
const resolvers = marketResolvers;

module.exports = {
  // typeDefs is an array, because it should be possible to split your schema if the schema grows to big, you can just export multiple here
  typeDefs: [typeDefs],
  resolvers,
};
