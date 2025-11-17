import User from "../models/user.js";
import { hash } from "bcrypt";

const createUser = async (userData) => {
  userData.password = await hash(userData.password, 10);
  const user = await User.create(userData);
  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};

export default createUser;
