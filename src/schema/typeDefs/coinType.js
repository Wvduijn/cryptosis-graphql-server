import { gql } from 'apollo-server-express';

const coinType = gql`
  type Coin {
    id: String!
    name: String!
    symbol: String!
    image: String!
    current_price: Int
    marketcap: Int
    market_cap_rank: Int
    high_24: Int
    low_24: Int
    price_change_percentage_24h: Int
    ath: Int
    ath_change_percentage: Int
    ath_date: Date!
    sparkline_data: [Int]
  }

  type Favorites {
      coins: [Coin]
      user: User!
  }

  #Queries
  type Query {
    getCoin(id: ID!): Coin
    getCoins: [Coin]
  }

  type Mutation {
    addToFavorites(coinId: ID!): Favorites
    removeFromFavorites(coinId: ID!): Favorites
  }
`;

export default coinType;
