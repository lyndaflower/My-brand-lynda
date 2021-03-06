import jwt from "jsonwebtoken";
import user from "../model/user";

export const userValidate = async (req, res,next) => {
    const findUser = await user.findOne({ email: req.body.email });
    if(!findUser){
      return res.status(404).json({message:"user not found"});
    }
    if (findUser.password != req.body.password) {
      return res.status(404).json({ error: "wrong password" });
    }
    const token = await jwt.sign(findUser.email, "secret");
     return res.status(200).json({ message: "successful signin", token });
    next();
  }