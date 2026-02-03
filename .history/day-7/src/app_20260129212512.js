const express  = require("express")

const app = express();



/* POST */
/* req.body => {title, description} */


app.post("/notes",(req, res)=>{
    const {title, description} = req.body;
})

module.exports = app;