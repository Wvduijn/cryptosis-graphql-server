import cors from 'cors';
import express from 'express';

const { ApolloServer } = require('apollo-server-express');

import { getUser } from './utils/context';
import schema from './modules';

import CoinApi from './datasources/crypto';

const app = express();
app.use(cors());

const server = new ApolloServer({
  schema,
  context: ({ req, res }) => ({ req, res }),
  dataSources: () => ({
    coinApi: new CoinApi(),
  }),
  // context: async ({ req }) => ({
  //   user: await getUser(req)
  // })
  introspection: true
});

server.applyMiddleware({
  app
});
export default app;
