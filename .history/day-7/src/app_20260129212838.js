const express  = require("express")

const app = express();
const noteModel = require("./models/notes.model")
app.use(express.json())

/* POST */
/* req.body => {title, description} */


app.post("/notes",(req, res)=>{
    const {title, description} = req.body;
await 

})

module.exports = app;