require('dotenv').config()
const mongoose = require('mongoose')



const connectToDb = () => {
    mongoose.connect(process.env.MY_DATABASE).then(() => {
        console.log("mongoDB connected Successfully")
    })
}
module.exports = connectToDb






