const express  = require("express")

const app = express();

app.use(express.json())

/* POST */
/* req.body => {title, description} */


app.post("/notes",(req, res)=>{
    const {title, description} = req.body;
})

module.exports = app;