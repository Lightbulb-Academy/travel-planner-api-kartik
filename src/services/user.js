import User from "../models/user.js";

const createUser = async (userData) => {
  // userData.password = await hash(userData.password, 10);

  // const user = await User.create(userData);
  // return {
  //   _id: user._id,
  //   name: user.name,
  //   email: user.email,
  //   createdAt: user.createdAt,
  //   updatedAt: user.updatedAt,
  // };

  const user = await User.create(userData);
  const { password, ...userWithoutPassword } = user.toObject();
  return userWithoutPassword;
};

const findAllUsers = async () => {
  const users = await User.find({}, { password: 0 });
  return users;
};

const findUserById = async (id) => {
  const user = await User.findById(id, { password: 0 });
  return user;
};

export { createUser, findAllUsers, findUserById };
