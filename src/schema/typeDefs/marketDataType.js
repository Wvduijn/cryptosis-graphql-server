import { gql } from 'apollo-server-express';

const marketDataType = gql`
  type MarketData {
    active_cryptocurrencies: Int!
    markets: Int!
    total_market_cap: Int!
    total_volume: Int!
    btc_dominance: Int!
    market_cap_change_percentage: Int
  }

  #Queries
  type Query {
    getMarketData: MarketData
  }

`;

export default marketDataType;
