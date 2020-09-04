import throng from 'throng';
import mongoose from 'mongoose';
import url from 'url';
import app from './app';
import * as config from './config/config'

const startServer = async () => {
  const mongooseOptions = {
    useNewUrlParser: true,
    promiseLibrary: global.Promise,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  };

  try {
    await Promise.all([
      mongoose.connect(config.MONGODB_URI, mongooseOptions),
      app.listen(config.PORT)
    ]);
    // eslint-disable-next-line no-console
    console.log(
      `🚀 Server has started on port: ${config.PORT}, 🚀 GraphQL Server ready at ${config.API_URL}, 🚀 connected to mongo at ${config.MONGODB_URI}`
    );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Could not start the app: `, error);
  }
};

// Let's make Node.js clustered for beter multi-core performance
throng(
  {
    workers: config.WORKERS,
    lifetime: Infinity
  },
  startServer
);
