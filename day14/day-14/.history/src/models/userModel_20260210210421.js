const mongoose = require("mongoose");

const userName = new mongoose.Schema({
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