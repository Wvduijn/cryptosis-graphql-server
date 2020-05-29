import { gql } from 'apollo-server-express';

const marketDataType = gql`
  
  type MarketData {
    active_cryptocurrencies: Int!
    markets: Int!
    total_market_cap: Float!
    total_volume: Float!
    btc_dominance: Float!
    market_cap_change_percentage: Float!
  }

  #Queries
  extend type Query {
    getMarketData: MarketData
  }
`;

export default marketDataType;