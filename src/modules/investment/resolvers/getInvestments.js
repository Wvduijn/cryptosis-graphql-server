const getInvestments = async (_, {}, {Investment, currentUser}) => {
    try {
        const investments = await Investment.find({
            investor: currentUser._id
        });
        return investments;
    } catch (error) {
        throw new Error(error);
    }
}

export default getInvestments;