import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # QUERIES
  type Query {
    me: User!
    user(id: ID!): User
    getUser: User
  }

  #TYPES

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    avatar: String
    joinDate: String
    WatchList: [Coin]
  }

  type Coin {
    id: ID!
    name: String!
    symbol: String!
  }

  type Token {
    token: String!
  }

  #MUTATIONS
  type Mutation {
    signupUser(user: UserInput!): User
    signinUser(username: String!, password: String!): User!
  }

  #INPUTS
  input UserInput {
    username: String!
    email: String!
    password: String!
  }
`;
