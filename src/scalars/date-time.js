import { gql } from 'apollo-server-express';
const { GraphQLDateTime } = require('graphql-iso-date');

const typeDef = gql`
  scalar DateTime
`;

const DateTime = GraphQLDateTime;


export default {
  typeDef,
  resolvers: {
    DateTime
  }
};
