import { gql } from 'apollo-server-express';


const userType = gql`
  #TYPES
  type Auth {
    id: ID!
    username: String!
    token: String!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    password: String!
    avatar: String
    joinDate: String
    # favorites: [Coin]!
  }

  #QUERIES
  type Query {
    readUsers: [User]
    readUser(id: ID!): User
  }

  # MUTATION
  type Mutation {
    signup(input: UserInput!): User
    login(input: LoginInput!): Auth!
  }

  #INPUT
  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input LoginInput {
    username: String!
    password: String!
  }
`; 

export default userType
