// calculations on front-end or backend? import here and apply to total investment cost

const createInvestment = async (
  _,
  {
    input: {
    coinName,
    amount,
    buyPrice,
    priceType,
    currency,
    buyDate,
    description,
    }
  },
  { Investment, currentUser }
) => {
  try {
    const investment = await Investment.create({
      coinName,
      amount,
      buyPrice,
      priceType,
      currency,
      buyDate,
      description,
      investor: currentUser._id,
    });

    return investment;
  } catch (error) {
    throw error;
  }
};

export default createInvestment;
