import jwt from "jsonwebtoken";
import user from "../model/user";
import Article from "../model/article";


export const checkToken = (req, res, next) => {
    // console.log(req.headers);
    if (!req.headers.token) {
      return res.status(400).json({ error: "no token provided" });
    }
    try {
      const email = jwt.verify(req.headers.token, process.env.secret);
      const users = user.findOne({ email });
  
      if (!users) {
        return res.status(404).json({ error: "user not found" });
      }
    } catch (err) {
      return res.status(404).json({ error: err.message });
    }
    next();
  };