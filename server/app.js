import express, { response } from 'express';
import bodyParser, { json } from 'body-parser';
import dotenv from "dotenv";
import mongoose from "./config/connect";
import { connect } from 'mongoose';
import Article from './model/article';
import user from './model/user';
import Comment from './model/comment';
import Queries from './model/query'
import jwt from 'jsonwebtoken';

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// const newUser = new user({email:process.env.email ,password: process.env.password})
// newUser.save().then((data)=>{
//   console.log(data);
// })

app.get('/', (req, res) => res.status(200).send({ status: 200, message: 'Welcome to my website' }));
const port = process.env.PORT || 3000;

// get one article
app.get('/article/:id',async(req,res)=>{
  const data = await Article.findOne({_id:req.params.id})
  return res.status(200).json({message: 'success', data})
})
// article
app.post('/api/article',(req,res)=>{
  // console.log(req.headers);
  if(!req.headers.token){
    return res.status(400).json({error:"no token provided"})
  }
  try{
    const email = jwt.verify(req.headers.token,process.env.secret)
    const users = user.findOne({email});

    if(!users){
      return res.status(404).json({error:"user not found"})
    }
  }
  catch(err){
    return res.status(404).json({error:err.message})
  }
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        body: req.body.body,
        // image: req.body.image,
      });
      article
      .save()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the User.",
        });
      });
})
app.get('/api/article',(req,res)=>{
   return Article.find().then(data =>res.status(200).json({data}))
});

// user
app.post('/api/signin',async (req,res)=>{
  const findUser = await user.findOne({email: req.body.email});
  if(findUser.password != req.body.password){
   return res.status(404).json({error:"wrong password"})
  }
  const token = await jwt.sign(findUser.email, 'secret')
  res.status(200).json({message:"successful signin",token});
})
app.get('/api/signin',(req,res)=>{
    user.find().then(data =>res.status(200).json({data}))
})

app.patch('/api/update/:id',async(req,res)=>{
  const title = req.body.title;
  const description= req.body.description;
  const body = req.body.body;

  const article = await Article.findOne({
    _id:req.params.id
  })
  if(title && description && body) {
    article.title = title;
    article.description = description;
    article.body = body;

  }  
  await article.save()
  return res.status(200).send({message: "updated successfully", data: article});
})

app.delete('/api/delete/:id',async(req,res)=>{
  await Article.deleteOne({ _id: req.params.id });
  return res.status(200).send({message:"article delete successfully!!"})
})
 app.listen(port, () => console.log("app running"));
export default app;