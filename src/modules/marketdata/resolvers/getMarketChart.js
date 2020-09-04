// resolver signature = (parent, args, context, info)

const getMarketChart = async (_, { coinId }, { dataSources }) => {
  return dataSources.coinApi.getMarketChart(coinId);
};

export default getMarketChart;
