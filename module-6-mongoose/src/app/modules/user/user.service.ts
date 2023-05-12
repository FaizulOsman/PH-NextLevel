import { User } from "./user.model";

export const createUserToDB = async () => {
  const user = new User({
    id: "104",
    role: "student",
    password: "s",
    name: {
      firstName: "Abul",
      middleName: "Bashar",
      lastName: "Chowdhury",
    },
    dateOfBirth: "3/10/1995",
    gender: "male",
    email: "abul@gmail.com",
    contactNo: "123456789",
    emergencyContactNo: "911",
    presentAddress: "Kosu khet",
    permanentAddress: "Goru mara",
  });
  await user.save();
  return user;
};
