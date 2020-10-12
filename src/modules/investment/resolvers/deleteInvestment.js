import { ObjectID } from 'mongodb';

const deleteInvestment = async (
  _,
  { id },
  { Investment }
) => {
  try {
    const investment = await Investment.findOneAndDelete({_id: id});
    return investment;
  } catch (error) {
    throw error;
  }
};

export default deleteInvestment;
