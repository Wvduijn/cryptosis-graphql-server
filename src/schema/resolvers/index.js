import { mergeResolvers } from 'merge-graphql-schemas';
import { userResolver} from './userResolver';
import { coinResolver } from './coinResolver';
import { marketDataResolver } from './marketDataResolver';

// For Modular approach i use 'merge-graphql-schemas' >> https://github.com/Urigo/merge-graphql-schemas
// Merge resolvers with mergeResolvers : https://github.com/Urigo/merge-graphql-schemas#merging-resolvers

const resolvers = [
    userResolver,
    coinResolver,
    marketDataResolver
];

export default mergeResolvers(resolvers)
