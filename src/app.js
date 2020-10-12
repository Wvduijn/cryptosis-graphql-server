import cors from 'cors';
import express from 'express';

// Setup Apollo Server
import { ApolloServer } from 'apollo-server-express';

// Context User
import { getUser } from './utils/context/context';

// Datasources
import CoinApi from './datasources/crypto';

// Models
import User from './models/User';
import Coin from './models/Coin';
import Investment from './models/Investment';

// Schema
import schema from './modules';

const app = express();
app.use(cors());

const server = new ApolloServer({
  schema,
  dataSources: () => ({
    coinApi: new CoinApi(),
  }),
  context: async ({ req }) => ({
    currentUser: await getUser(req),
    // Models on context
      User,
      Coin,
      Investment,
  }),
  introspection: true,
});

server.applyMiddleware({
  app
});
export default app;
