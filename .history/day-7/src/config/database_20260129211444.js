const mongoose = require("mongoose")

function connectToDb()
{
    mongoose.connect('mongodb+srv://sandeepvishwakarmagkp5_db_user:XmbuXRYFwLtAFYdA@cluster0.wmw0epf.mongodb.net/day-7').then(()=>{console.log("connected To DataBase....")})
}

module.exports =  connectToDb