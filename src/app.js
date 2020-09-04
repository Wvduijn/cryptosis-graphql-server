import cors from 'cors';
import express from 'express';

const { ApolloServer } = require('apollo-server-express');

import { getUser } from './utils/context/context';
import schema from './modules';

import CoinApi from './datasources/crypto';

import User from './models/User';
import Coin from './models/Coin';

const app = express();
app.use(cors());

const server = new ApolloServer({
  schema,
  dataSources: () => ({
    coinApi: new CoinApi(),
  }),
  context: async ({ req }) => ({
    user: await getUser(req),
    User,
    Coin
  }),
  introspection: true
});

server.applyMiddleware({
  app
});
export default app;
