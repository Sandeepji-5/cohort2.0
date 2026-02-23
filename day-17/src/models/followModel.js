const mongoose  = require('mongoose');
const type = require('mongoose/lib/schema/operators/type');

const followSchema = new mongoose.Schema({
     
follower:{
  type:String,
},

followee:{
   type:String
}   
,
status:{
  type:String,
  default:"pending",
  enum:{values:["pending", "accepted", "rejected"],
      message:"Status can Only  be pending , accepted or rejected"
  }
}





},{ timestamps:true})

followSchema.index({follower:1, followee:1}, {unique:true})

const followModel = new mongoose.model("follows", followSchema);

module.exports = followModel


