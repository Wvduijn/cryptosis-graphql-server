// resolver signature = (parent, args, context, info)

const getMarketData = async (_, {}, { dataSources }) => {
    return dataSources.coinApi.getMarketData();
};

export default getMarketData;
