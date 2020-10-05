import Article from "../model/article";
import Comment from "../model/comment";

export const createArticle = (req, res) => {
  const article = new Article({
    title: req.body.title,
    description: req.body.description,
    body: req.body.body,
    imageUrl: req.body.imageUrl,
    // image: req.body.image,
  });
  article
    .save()
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};

export const allArticles = (req, res) => {
  return Article.find().then((data) => res.status(200).json({ data }));
};

export const oneArticle = async (req, res) => {
  const data = await Article.findOne({ _id: req.params.id }).populate(
    "comments"
  );

  console.log("data", data);
  res.json(data);
};
export const updateArticle = async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const body = req.body.body;
  const imageUrl = req.body.imageUrl;

  const updated = await Article.findOneAndUpdate(
    { _id: req.params.id },
    { title, description, body, imageUrl },
    { new: true }
  );
  // console.log(updated);
  return res
    .status(200)
    .send({ message: "updated successfully", data: updated });
};

export const deleteArticle = async (req, res) => {
  try {
    const articleDelete = await Article.findOneAndDelete({
      _id: req.params.id,
    });
    if (!articleDelete)
      return res
        .status(404)
        .json({ status: 404, message: "Article not found!" });
    return res
      .status(200)
      .json({
        status: 200,
        message: "Article deleted successfully",
        articleDelete,
      });
  } catch (error){
    return res.status(500).json({ status: 500, message: error.message });
  }
};

export const comments = async (req, res) => {
  const { name, comment } = req.body;
  const { id } = req.params;
  return Comment.create({ name, comment }).then((docComment) => {
    // console.log("\n>> Created Comment:\n", docComment);

    return Article.findByIdAndUpdate(
      id,
      { $push: { comments: docComment._id } },
      { new: true, useFindAndModify: false }
    )
      .then((data) => res.status(201).send({ data }))
      .catch((err) => err);
  });
};
