const  express = require("express")

const app = express();

app.use(express.json())


app.get("/notes", (req, res)=>{
    
    res.send(notes);
    console.log(notes);
})
const notes = []
app.post("/notes", (req, res)=>{

    notes.push(req.body);
    res.status(201).json(notes)




})



module.exports = app
