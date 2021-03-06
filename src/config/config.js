const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;
const API_URL = `http://localhost:${PORT}`;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_LIFETIME = process.env.JWT_LIFETIME;
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY;
const COINMARKETCAP_SANDBOX_URL = process.env.COINMARKETCAP_SANDBOX_URL;
const COINMARKETCAP_URL = process.env.COINMARKETCAP_URL;
const COINGECKO_URL = process.env.COINGECKO_URL;

const WORKERS = process.env.WORKERS;

export {
  NODE_ENV,
  PORT,
  API_URL,
  MONGODB_URI,
  JWT_SECRET,
  JWT_LIFETIME,
  COINMARKETCAP_API_KEY,
  COINMARKETCAP_SANDBOX_URL,
  COINMARKETCAP_URL,
  COINGECKO_URL,
  WORKERS,
};
