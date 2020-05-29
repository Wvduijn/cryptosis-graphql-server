import{ makeExecutableSchemaFromModules } from '../utils/modules';

// modular setup for resolvers & typedefs
// easy expanding and maintainability

import auth from './auth';
import marketdata from './marketdata';

module.exports = makeExecutableSchemaFromModules({
  modules: [
    auth, 
    marketdata
  ]
});
