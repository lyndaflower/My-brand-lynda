import User from "../model/user";

 export const admin = async () => {
 const userAdmin= new User({
    email: "umurerwalynda@gmail.com",
    password: "135790",
  });

  User.deleteOne({ email: "umurerwalynda@gmail.com" });
  userAdmin
  .save().then(()=>{
    //  console.log( userAdmin);
 })
};

