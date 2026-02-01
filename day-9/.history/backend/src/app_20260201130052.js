const express = require("express")
const noteModel  = require('./model/model')
const app = express();

app.use(express.json());

app.get("/notes", (req, res) => {

    const notes = noteModel.find();
    res.status(200).json({
        message: "I hav Got the Notes Which You sent me...",
        notes
    })
})

app.post("/notes", async (req, res) => {
   const {name, age} = req.body;
   const notes = await noteModel.create({name, age});
   res.status(201).json({
    message: "Notes Posted By Krishna ",
    notes
})})
module.exports = app;




