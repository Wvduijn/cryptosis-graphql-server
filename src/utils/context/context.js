// import * as tokenUtil from './token';
// import User from '../../models/User';

// const getUser = async req => {
//   const header = req
//     ? req.request.headers.authorization
//     : '';

//   if (header) {
//     const token = header.replace('Bearer ', '');
//     const decodedToken = await tokenUtil.getDecodedToken(token)
//     return await User.findById(decodedToken.userId);
//   }

//   return null;
// }

// export { getUser };

import * as tokenUtil from './token';
import User from '../../models/User';

const TOKEN_HEADER_NAME = 'authorization';

const getUser = async (req) => {
  if (!req) {
    return null;
  }

  const tokenHeader = req.get(TOKEN_HEADER_NAME);

  if (!tokenHeader) {
    return null;
  }

  try {
    const token = tokenHeader.replace('Bearer ', '');
    const decodedToken = await tokenUtil.getDecodedToken(token);
    return await User.findById(decodedToken.userId);
  } catch (error) {
    return null;
  }
};

export { getUser };
