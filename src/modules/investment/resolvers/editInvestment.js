const editInvestment = async (
  _,
  {id,
    input: {
      coinName,
      amount,
      buyPrice,
      priceType,
      currency,
      buyDate,
      description,
    },
  },
  { Investment, currentUser }
) => {
  try {
    const investment = await Investment.findOneAndUpdate(
      { _id: id, investor: currentUser._id },
      { $set: { 
          coinName,
          amount,
          buyPrice,
          priceType,
          currency,
          buyDate,
          description,
      }},
      { new: true}
      
    );
    console.log('INVESTMENT', investment);
    return investment;
  } catch (error) {
    throw error;
  }
};

export default editInvestment;
