// COINMARKETCAP EDNPOINTS:
// /cryptocurrency/listings/latest -- list all crypto's (latest)
// /cryptocurrency/info -- crypto metadata
// /cryptocurrency/quotes/latest -- crypto market quotes
// /tools/price-conversion - price conversion tool for example BTC to EUR or BTC to DGB

// REPLACED COINMARKETCAP API for Free COINGECKO API - DOCS: ===> https://www.coingecko.com/api/documentations/v3#/
// top 100: https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h
// Coin by id: https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false
// global data: https://api.coingecko.com/api/v3/global

import { RESTDataSource } from 'apollo-datasource-rest';
import { COINGECKO_URL } from '../config/config';

class CoinAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = COINGECKO_URL;
  }

  // willSendRequest(request) {
  //   // set token headers
  //   request.headers.set('Authorization', this.context.token);
  //   // set query params
  //   request.params.set('api_key', this.context.token);
  // }

  // Retrieve Coin Top 100
  async getCoins() {
    //  cryptocurrency/listings/latest
    const response = await this.get('coins/markets', {
      vs_currency: 'eur',
      order: 'market_cap_desc',
      per_page: 100,
      page: 1,
      sparkline: true,
      price_change_percentage: '24h',
    });

    return Array.isArray(response)
      ? response.map((coin) => this.coinReducer(coin))
      : [];
  }

  // Specific coin data
  async getCoinById(coinId) {
    const response = await this.get(`coins/markets/${coinId}`, {
      localization: false,
      sparkline: false,
    });
    return this.coinDetailReducer(response.data);
  }

  // get Market Data
  async getMarketData() {
    const response = await this.get('global');
    return this.marketDataReducer(response.data);
  }

  // get Market Chart
  async getMarketChart() {
    const response = await this.get(`coins/${coinId}/market_chart`, {
      vs_currency: 'eur',
      days: '365',
    });
    return this.coinDetailReducer(response.data);
  }

  // REDUCERS
  coinReducer(coin) {
    return {
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      image: coin.image,
      current_price: coin.current_price,
      marketcap: coin.market_cap,
      market_cap_rank: coin.market_cap_rank,
      high_24: coin.high_24h,
      low_24: coin.low_24h,
      price_change_percentage_24h: coin.price_change_percentage_24h,
      ath: coin.ath,
      ath_change_percentage: coin.ath_change_percentage,
      ath_date: coin.ath_date,
      sparkline_data: coin.sparkline_in_7d.price,
    };
  }

  coinDetailReducer(coin) {
    return {
      id: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      market_cap_rank: coin.market_cap_rank,
      description: coin.description,
      blocktime: coin.block_time_in_minutes,
      image: coin.image,
      homepage: coin.links.homepage,
      genesis_date: coin.genesis_date,
      ath: coin.ath,
      ath_change_percentage: coin.ath_change_percentage,
      ath_date: coin.ath_date,
      atl: coin.atl,
      atl_change_percentage: coin.atl_change_percentage,
      atl_date: coin.atl_date,
      high_24: coin.high_24h,
      low_24: coin.low_24h,
      price_change_percentage_24h: coin.price_change_percentage_24h,
      total_supply: coin.total_supply,
      circulating_supply: coin.circulating_supply,
      sparkline_data: coin.sparkline_7d.price,
    };
  }

  marketDataReducer(market) {
    return {
      active_cryptocurrencies: market.active_cryptocurrencies,
      markets: market.markets,
      total_market_cap: Math.round(parseInt(market.total_market_cap.eur)),
      total_volume: Math.round(parseInt(market.total_volume.eur)),
      btc_dominance: market.market_cap_percentage.btc.toFixed(2),
      market_cap_change_percentage: market.market_cap_change_percentage_24h_usd.toFixed(
        2
      ),
    };
  }
}

export default CoinAPI
