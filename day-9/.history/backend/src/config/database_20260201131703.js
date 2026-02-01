const mongoose = require('mongoose')
require('dotenv').config();

const connectToDb = () => {
    mongoose.connect(process.env.MY_DATABASE).then(() => {
        console.log("mongoDB connected Successfully")
    })
}
module.exports = connectToDb






