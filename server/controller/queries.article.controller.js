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
  res.send(data);
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

export const updateQueries = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
  
    const updateQuery = await Queries.findOneAndUpdate(
      { _id: req.params.id },
      { name, email, subject,message },
      { new: true }
    );
    // console.log(updated);
    return res
      .status(200)
      .send({ message: "updated successfully", data: updateQuery });
  }
  export const deleteQueries = async(req,res)=>{
      await Queries.deleteOne({_id:req.params.id});
    return res.status(200).send({ message: "query delete successfully!!" });
  }
