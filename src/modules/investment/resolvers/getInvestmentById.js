const getInvestment = async (_, { id }, { Investment, currentUser }) => {
  try {
    const investment = await Investment.findOne({
      _id: id,
      investor: currentUser._id,
    });
    return investment;
  } catch (error) {
    throw new Error(error);
  }
};

export default getInvestment;
