import User from "../model/user";

export const admin = async () => {
  const removeUser= await User.deleteOne({ email: "umurerwalynda@gmail.com" });
console.log(removeUser);
  const userAdmin = new User({
    email: "umurerwalynda@gmail.com",
    password: "135790",
  });

  userAdmin.save().then(() => {
  });
};
