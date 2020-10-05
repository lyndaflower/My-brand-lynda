const mongoose = require('../config/connect');
const queries=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        subject:{
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true
        }
    },
    {
        strict: true,
        versionKey: false,
        timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
      })
      module.exports=mongoose.model('queries',queries);