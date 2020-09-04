const addToWatchlist = async (_, { coinId, username }, { User }) => {
    // Find User, add id of coin to its favorites array
    const currentUser = await User.findOneAndUpdate(
      { username },
      { $addToSet: { watchList: coinId } },
      { new: true }
    )
    // Return favorites from 'user'
    return { favorites: currentUser.watchList}
}

export default addToWatchlist;