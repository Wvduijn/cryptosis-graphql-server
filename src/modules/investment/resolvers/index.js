import createInvestment from './createInvestment';
import deleteInvestment from './deleteInvestment';
import getInvestments from './getInvestments';
import editInvestment from './editInvestment';

// Field Resolvers
import investorFieldResolver from './field-resolvers/investor';

const resolvers = {
  Query: {
    getInvestments,
  },
  Mutation: {
    createInvestment,
    deleteInvestment,
    editInvestment
  },
  Investment: {
    investor: investorFieldResolver
  }
};

export default resolvers;