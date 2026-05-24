const express = require("express")
const noteModel  = require('./model/model')
const app = express();

app.use(express.json())

app.get("/notes", (req, res) => {

    res.send(notes);
    console.log(" the send notes is :",notes);
})



app.post("/notes", async (req, res) => {
   const {name, age} = req.body;
   const note = await noteModel.create({name, age});
   res.status(201).json({
    message: "Notes Posted By Krishna ",
    note
   
  
})})
module.exports = app
