import { gql } from 'apollo-server-express';

const investmentType = gql`
  type Investment {
    _id: ID!
    coinName: String!
    amount: Float!
    buyPrice: Float!
    priceType: priceTypeEnum!
    currency: currencyEnum!
    buyDate: DateTime!
    description: String
    investor: User!
  }

  enum priceTypeEnum {
    PER
    TOTAL
  }

  enum currencyEnum {
    EUR
    USD
  }

  input InvestmentInput {
    coinName: String!
    amount: Float!
    buyPrice: Float!
    priceType: priceTypeEnum!
    currency: currencyEnum!
    buyDate: DateTime!
    description: String
  }

  #Queries
  extend type Query {
    getInvestments: [Investment] @isAuthenticated
    getInvestment(id: ID!): Investment @isAuthenticated
  }

  extend type Mutation {
    createInvestment(input: InvestmentInput!): Investment! @isAuthenticated
    editInvestment(id: ID!, input: InvestmentInput!): Investment!
      @isAuthenticated
    deleteInvestment(id: ID!): Investment! @isAuthenticated
  }
`;

export default investmentType;
