const mongooose  = require('mongoose');

const userSchema = new mongoose.Schema({

name:String,
email:String,
password:String
})


const userModel = mongooose.model("userDetail", userSchema());
module.exports = userModel;