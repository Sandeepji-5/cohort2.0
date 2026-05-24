const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true, "User name is already exixt"],
        required:[true, "User name is required"]
    },
    email:{
        type: String,
        unique:[true, "Email already exist"],
        required:[true, "Email is required"]
    },
    password:{
        type:String,
        required:[true, "Password is required !!"]
    },
    bio: String,
    profileImage:{
        type:String,
        default:""
    }

})


const userModel = new mongoose.model("user", userSchema);
module.exports  = userModel;
