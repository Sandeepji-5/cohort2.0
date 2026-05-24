const mongoose = require('mongoose');


function connectToDB(){

    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("MOngoDB Connected Successfully...")
    })


}


module.exports =  connectToDB

