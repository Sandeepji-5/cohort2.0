const mongoose = require("mongoose")
const env = require('dotenv')
function connectToDb()
{
    mongoose.connect(env.MONGO_URI).then(()=>{console.log("connected To DataBase....")})
}

module.exports =  connectToDb