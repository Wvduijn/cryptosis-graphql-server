import getCoinTop from './getCoinTop';
import addToWatchlist from './addToWatchlist';
import removeFromWatchlist from './removeFromWatchlist';

const resolvers = {
  Query: {
    getCoinTop,
  },
  Mutation: {
    addToWatchlist,
    removeFromWatchlist
  }
};

export default resolvers;
