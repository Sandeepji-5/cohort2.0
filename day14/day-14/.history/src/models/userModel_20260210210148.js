const mongoose = require("mongoose");

const userName = new mongoose.Schema({
    username:{
        type:String,
        unique:[true, "User nmae is already exixt"]
    }
})