import { gql } from 'apollo-server-express';

const coinType = gql`
  type Coin {
    name: String!
  }

  #Queries
  extend type Query {
    getCoinTop: [Coin]
  }
`;

export default marketDataType;
