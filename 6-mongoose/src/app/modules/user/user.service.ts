import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  await user.save();
  return user;
};

export const getUserFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1 }); // it will show only name from data
  return user;
};

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers(); // it will show only name from data
  console.log(admins);
  return admins;
};
