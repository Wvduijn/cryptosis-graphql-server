// calculations on front-end or backend? import here and apply to total investment cost

const investorFieldResolver = async (_, __,{ User, currentUser }) => {
  try {
    return User.findOne({_id: currentUser._id});
  } catch (error) {
    throw error;
  }
};

export default investorFieldResolver;
