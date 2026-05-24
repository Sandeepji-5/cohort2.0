const mongoose  = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("mongoDB Connected Successfully")
    })

}

module.exports = connectToDb