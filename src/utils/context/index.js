import * as tokenUtil from './token';
import User from '../../models/User';

const getUser = async req => {
  const header = req
    ? req.request.headers.authorization
    : '';

  if (header) {
    const token = header.replace('Bearer ', '');
    const decodedToken = await tokenUtil.getDecodedToken(token)
    return await User.findById(decodedToken.userId);
  }

  if (requireAuth) {
    throw new Error('Authentication required');
  }

  return null;
}

export { getUser };