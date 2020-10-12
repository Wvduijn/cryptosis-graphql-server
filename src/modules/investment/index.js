import investmentResolvers from './resolvers';
import investmentTypeDefs from './typeDefs';

const typeDefs = investmentTypeDefs;
const resolvers = investmentResolvers;

module.exports = {
  // typeDefs is an array, because it should be possible to split your schema if the schema grows to big, you can just export multiple here
  typeDefs: [typeDefs],
  resolvers
};
