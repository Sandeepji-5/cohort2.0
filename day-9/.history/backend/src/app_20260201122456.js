const express = require("express")

const app = express();

app.use(express.json())

app.get("/notes", (req, res) => {

    res.send(notes);
    console.log(" the send notes is :",notes);
})
const notes = []
app.post("/notes", (req, res) => {

    notes.push(req.body);
    res.status(201).json(notes)

    console.log("Notes is posted Successfully")
})
module.exports = app
