import { gql } from 'apollo-server-express';

const investmentType = gql`
  type Investment {
    _id:  ID!
    coinName: String!;
    amount: Float!,
    buyPrice: Float!,
    priceType: priceTypeEnum!,
    currency: currencyEnum!,
    buyDate: DateTime!,
    description: String
  }

  enum priceTypeEnum {
    PER,
    TOTAL
  },

  enum currencyEnum {
    EUR,
    USD
  }

  input InvestmentInput {
    coinName: String!;
    amount: Float!,
    buyPrice: Float!,
    priceType: priceTypeEnum!,
    currency: currencyEnum!,
    buyDate: DateTime!,
    description: String
  }

  #Queries
  extend type Query {
    getInvestments: [Investment]
    getInvestment(id: ID!): Investment
  }

  extend type Mutation {
    createInvestment(investment: InvestmentInput!): Investment! @isAuthenticated 
    editInvestment: Investment! @isAuthenticated
    deleteInvestment(id:  ID!): Investment! @isAuthenticated       
  }
`;

export default investmentType;
