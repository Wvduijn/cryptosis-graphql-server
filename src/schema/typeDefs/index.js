import { mergeTypes} from 'merge-graphql-schemas';
import userType from './userType';
import coinType from './coinType';
import marketDataType from './marketDataType';

// set all typeDefs to types
const types = [userType, coinType, marketDataType]

// merge schemas
export default mergeTypes(types, { all: true });