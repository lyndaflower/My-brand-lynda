const mongoose = require("../config/connect");
const user = new mongoose.Schema(
    {
      email: {
      desc: "The user's email address.",
      trim: true,
      type: String,
      index: true,
      unique: true,
      required: true,
    },
    password: {
      desc: "user password",
      trim: true,
      type: String,
      required: true,
      select: true,
    },
    },
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
      });
      module.exports=mongoose.model("user", user);

