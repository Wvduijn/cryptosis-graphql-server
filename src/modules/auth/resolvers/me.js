const me = async (_, args, { currentUser }) => ({
  ...currentUser._doc,
  id: currentUser.id
});

export default me;
