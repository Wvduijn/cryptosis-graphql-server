import{ makeExecutableSchemaFromModules } from '../utils/modules';

// modular setup for resolvers & typedefs
// easy expanding and maintainability

import auth from './auth';
import marketdata from './marketdata';
import coin from './coin';
// import investment from './investment';

module.exports = makeExecutableSchemaFromModules({
  modules: [
    auth, 
    marketdata,
    coin
    // investment
  ]
});
