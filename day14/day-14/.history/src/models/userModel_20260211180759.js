const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true, "User nmae is already exixt"],
        required:[true, ""]
    },
    email:{
        type: String,
        unique:[true, "Email already exist"],
        required:[true, "Email is required"]
    },
    password:{
        type:String,
        required:[true, ""]
    },
    bio:{

    }

})


const userModel = new mongoose.model("user", userSchema);
module.exports  = userModel;
