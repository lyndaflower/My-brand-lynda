const mongoose = require("../config/connect");
const articles = new mongoose.Schema(
  {
    title: {
      desc: "The user article title",
      type: String,
      index: true,
      required: true,
    },
    description: {
      desc: "user article description",
      type: String,
      required: true,
    },
    body: {
      desc: "The user article body",
      type: String,
      required: true,
    },
    imageUrl: {
      desc: "The users's image.",
      type: String,
      required : false,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'comment'
      }
    ]
  },
  {
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

module.exports = mongoose.model("article", articles);