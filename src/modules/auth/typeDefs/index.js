import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type AuthData {
    user: User
    token: String!
    tokenExpiration: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    avatar: String
    joinDate: DateTime
  }

  extend type Query {
    me: User @isAuthenticated
  }

  extend type Mutation {
    login(email: String!, password: String!): AuthData

    signup(email: String!, password: String!, username: String!): User
  }
`;

export default typeDefs;
