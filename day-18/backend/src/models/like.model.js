const mongoose  =  require('mongoose');

const likeSchema = new mongoose.Schema({

  post:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"posts",
    required:[true, 'Post is required for Like']
  },
  user:{
    type:String,
    required:[true, "User is Required for creating a like"]
  }
}, {timestamps:true})

likeSchema.index({post:1, user:1}, {unique:true})

const likeModel =   new mongoose.model('likes', likeSchema);
module.exports = likeModel