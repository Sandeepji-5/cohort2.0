const express = require("express")
const noteModel  = require('./model/noteModel')

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

/* DELETE */

app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;
    const deletedNote = await noteModel.findByIdAndDelete(id);
    if (!deletedNote) {
        return res.status(404).json({
            message: "Note not found"
        });
    }
    res.status(200).json({
        message: "Note deleted successfully",
        deletedNote
    });
});



/* PATH  */






module.exports = app;




