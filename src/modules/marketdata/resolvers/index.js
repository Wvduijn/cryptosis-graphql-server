import getMarketData from './getMarketData';
import getMarketChart from './getMarketChart';

const resolvers = {
  Query: {
    getMarketData,
    getMarketChart
  }
};

export default resolvers;
