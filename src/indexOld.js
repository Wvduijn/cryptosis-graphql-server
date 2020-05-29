// imports
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
// Apollo Server TypeDefs and Resolvers
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema/typeDefs';
import resolvers from './schema/resolvers';
// Models for context
import { User } from './models/User';

// config
import { PORT, API_URL, MONGODB_URI } from './config/config';

const startServer = async () => {
  console.log(MONGODB_URI);
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  } catch (error) {
    console.log(error.message);
  }
  
  const app = express();
  app.use(cors());
  

  // instantiate ApolloServer and set User as context
  const server = new ApolloServer({ typeDefs, resolvers});

  server.applyMiddleware({ app });

  app.listen({ port: PORT }, () =>
    console.log(
      `'🚀 DB CONNECTED', 🚀 Server ready at ${API_URL}${server.graphqlPath}'`
    )
  );
};

startServer();

/*
{
  "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4uZG9lIiwiaWF0IjoxNTM3NDk5NzUwLCJleHAiOjE1Mzc1ODYxNTB9.5wisTsYJUES0RqdRfUy_0hHJwMmbnTe4jDd6m6va3Vo"
}
*/
