const mongoose = require("mongoose");
// mongodb+srv://Lynda:<password>@cluster0.vzekb.mongodb.net/<dbname>?retryWrites=true&w=majority

// 124680
// Lynda
// mongodb://localhost:27017/my_brand_lynda
mongoose.connect(
  "mongodb+srv://cluster0.vzekb.mongodb.net/my_brand_lynda?retryWrites=true&w=majority",
  { 
      dbName:'my_brand_lynda',
      user:'Lynda',
      pass:"124680",
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex: true,
},

  (err) => {
    if (!err) {
      console.log("Successfully Established Connection with MongoDB");
    } else {
      console.log(
        "Failed to Establish Connection with MongoDB with Error: " + err
      );
    }
  }
);
module.exports = mongoose;
