import { gql } from 'apollo-server-express';

const coinType = gql`
  type Coin {
    _id: String
    id: String!
    name: String!
    symbol: String!
    image: String
    current_price: Float!
    marketcap: Float!
    market_cap_rank: Int!
    high_24: Float!
    low_24: Float!
    price_change_percentage_24h: Float!
    ath: Float!
    ath_change_percentage: Float!
    ath_date: DateTime
    sparkline_data: Float!
  }

  #Queries
  extend type Query {
    getCoinTop: [Coin]
  }

  extend type Mutation {
    addToWatchlist(coinId: String!, username: String!): WatchList
      @isAuthenticated
    removeFromWatchlist(coinId: String!, username: String!): WatchList
      @isAuthenticated
  }
`;

export default coinType;
