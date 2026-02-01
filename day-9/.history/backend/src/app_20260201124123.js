const express = require("express")
const noteModel  = require('./model/model')
const app = express();

app.use(express.json())

app.get("/notes", (req, res) => {

    res.send(notes);
    console.log(" the send notes is :",notes);
})


const notes = []
app.post("/notes", (req, res) => {
    const note = noteModel.config({
     

        
    })
    notes.push(req.body);
    res.status(201).json(notes)

    console.log("Notes is posted Successfully")
})
module.exports = app
