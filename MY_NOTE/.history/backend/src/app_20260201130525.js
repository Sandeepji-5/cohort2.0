const express = require("express")
const noteModel  = require('./model/model')
const app = express();

app.use(express.json());

app.get("/notes", async (req, res) => {
    try {
        const notes = await noteModel.find();
        console.log("notes is :", notes)
        res.status(200).json({
            message: "I hav Got the Notes Which You sent me...",
            notes
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching notes",
            error: error.message,
        });
    }
});

app.post("/notes", async (req, res) => {
   const {name, age} = req.body;
   const notes = await noteModel.create({name, age});
   res.status(201).json({
    message: "Notes Posted By Krishna ",
    notes
})})
module.exports = app;




