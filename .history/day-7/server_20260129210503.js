const app = require('./src/app')
const mongoose  = require('mongoose')





app.listen(3000, (req, res)=>{
    console.log("Server is running on port: 3000")
})