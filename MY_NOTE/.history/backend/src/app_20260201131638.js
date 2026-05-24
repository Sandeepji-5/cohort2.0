const express = require("express")
const noteModel  = require('./model/model')

const app = express();
app.use(express.json());

/* GET METHOD ........................................*/

app.get("/notes", async (req, res) => {
        const notes = await noteModel.find();
        res.status(201).json({
            message: "Thank you for requesting the notes.",
            notes
        });
    
});



/* POST METHODS ..................................... */
app.post("/notes", async (req, res) => {
   const {name, age} = req.body;
   const notes = await noteModel.create({name, age});
   res.status(201).json({
    message: "Notes Posted By Krishna ",
    notes
})})


module.exports = app;




