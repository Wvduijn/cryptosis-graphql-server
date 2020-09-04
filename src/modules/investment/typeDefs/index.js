import { gql } from 'apollo-server-express';

const investmentType = gql`
  type Investment {
    _id: String
    id: String!
    name: String;
    sparkline_data: Float!
  }

  input InvestmentInput {
    stars: Int!
    commentary: String
  }

  #Queries
  extend type Query {
    getInvestments: [Investment]
  }

  #   extend type Mutation {
  #     addToWatchlist(coinId: String!, username: String!): WatchList
  #     @isAuthenticated
  #     removeFromWatchlist(coinId: String!, username: String!): WatchList
  #     @isAuthenticated
  #   }
`;

export default investmentType;
