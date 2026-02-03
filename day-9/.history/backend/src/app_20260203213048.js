const express = require("express")
const noteModel  = require('./model/noteModel')

const CORS = require("cors")
const path = require('path')

const app = express();
app.use(CORS())
app.use(express.json());

/* GET METHOD ........................................*/
app.get("/api/notes", async (req, res) => {
        const notes = await noteModel.find();
        res.status(201).json({
            message: "Thank you for requesting the notes.",
            notes
        });
});



/* POST METHODS ..................................... */
app.post("/api/notes", async (req, res) => {
   const {title, description} = req.body;
   const notes = await noteModel.create({title, description});
   res.status(201).json({
    message: "Notes Posted By Krishna ",
    notes
})})

/* DELETE */

app.delete("/api/notes/:id", async (req, res) => {
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



/* PATCH  */

app.patch("/api/notes/:id", async(req, res)=>{
    const id = req.params.id
    const {title} = req.body;
    await noteModel.findByIdAndUpdate(id, {title});
    res.status(200).json({
        message:"Note Updated Successfully...."
        
    })
})
console.log(__dirname);  // C:\cohort2.0\day-9\backend\src

app.use('*name', (req, res)=>{
    // res.sendFile('C:/cohort2.0/day-9/backend/public/index.html');
     res.sendFile(path.join(__dirname,".." ,"/public/index.html"));   
})


module.exports = app;




