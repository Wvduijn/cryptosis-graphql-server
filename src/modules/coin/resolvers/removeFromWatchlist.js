const removeFromWatchlist = async (_, { coinId, username }, { User }) => {
  // Find User, remove id of coin to its favorites array
  const currentUser = await User.findOneAndUpdate(
    { username },
    { $pull: { watchList: coinId } },
    { new: true }
  )
  // Return favorites from 'user'
  return { favorites: currentUser.watchList };
};

export default removeFromWatchlist;
