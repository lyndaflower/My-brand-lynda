const mongoose = require('../config/connect');
const comments=new mongoose.Schema(
    {
name:{
type:String,
required: true
},
comment:{
    type:String,
    required:true
}
},
{
    strict: true,
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
)
module.exports=mongoose.model("comment",comments);
