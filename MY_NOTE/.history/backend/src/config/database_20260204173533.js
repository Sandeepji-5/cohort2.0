require('dotenv').config()
const mongoose = require('mongoose')



const connectToDb = () => {
    mongoose.connect(process.env.MY_DATABASE).then(() => {
        console.log(process.env.MY_DATABASE)
        console.log("mongoDB connected Successfully")
    })
}
module.exports = connectToDb






