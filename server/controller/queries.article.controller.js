import Queries from '../model/query';

export const articleQueries =(req,res)=>{
const query = new Queries({
    name : req.body.name,
    email : req.body.email,
    subject : req.body.subject,
    message : req.body.message
})
query
.save()
.then((data) => {
  res.status(200).send(data);
})
.catch((err) => {
  res.status(500).send({
    message: err.message || "Some error occurred while sending message.",
  });
});
}
export const retrieveQuery =  async(req,res)=>{
const query = await Queries.findOne({_id: req.params.id })
return res.status(200).json({ message: "success", query});
}

export const allQueries=(req,res)=>{
  return Queries.find().then((data)=>res.status(201).json({data}));
}