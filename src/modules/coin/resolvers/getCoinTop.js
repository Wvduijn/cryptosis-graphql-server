// resolver signature = (parent, args, context, info)

const getCoinTop = async (_, {}, { dataSources }) => {
  return dataSources.coinApi.getCoins();
};

export default getCoinTop;
