import coinResolvers from './resolvers';
import coinTypeDefs from './typeDefs';

const typeDefs = coinTypeDefs;
const resolvers = coinResolvers;

module.exports = {
  // typeDefs is an array, because it should be possible to split your schema if the schema grows to big, you can just export multiple here
  typeDefs: [typeDefs],
  resolvers,
};
