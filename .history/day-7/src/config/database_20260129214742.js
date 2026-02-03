const mongoose = require("mongoose")

function connectToDb()
{
    mongoose.connect(MONGO_URI).then(()=>{console.log("connected To DataBase....")})
}

module.exports =  connectToDb