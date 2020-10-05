import express, { response } from "express";
import dotenv from "dotenv";
import {createArticle} from '../controller/article.controller';
import {oneArticle} from '../controller/article.controller';
import {allArticles} from '../controller/article.controller';
import {deleteArticle} from '../controller/article.controller';
import {updateArticle} from '../controller/article.controller';
import {comments} from '../controller/article.controller';
import {allQueries, articleQueries } from '../controller/queries.article.controller';
import {retrieveQuery} from '../controller/queries.article.controller';
import {checkToken} from '../middleware/auth.middleware';
import {userValidate} from '../middleware/articles.middleware';

dotenv.config();
const app = express.Router();

// const newUser = new user({email:process.env.email ,password: process.env.password})
// newUser.save().then((data)=>{
//   console.log(data);
// })
app.get("/", (req, res) =>
  res.status(200).send({ status: 200, message: "Welcome to my website" })
);

app.post("/api/article",checkToken,createArticle);
app.get("/article/:id",oneArticle);
app.get("/api/article", allArticles);
app.post("/api/signin", userValidate);
app.patch("/api/articles/update/:id", checkToken, updateArticle);
app.delete("/api/articles/delete/:id", checkToken,deleteArticle);
app.post("/api/articles/:id/comment", comments);
app.post("/api/articles/queries",articleQueries);
app.get("/api/articles/queries/:id",checkToken,retrieveQuery);
app.get("/api/queries",checkToken,allQueries);

export default app;
