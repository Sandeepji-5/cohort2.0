const express = require('express')
const app = express();
app.use(express.json());

// GET

const notes = [];
app.get("/", (req, res) => {
    res.send(notes);
    console.log("notes from get:", notes)
})


// POST

app.post("/notes", (req, res) => {
    notes.push(req.body);
    console.log("notes", notes);
    res.send(notes);
});



// DELETE

app.delete("/notes/:index", (req, res) => {
    const index = req.params.index;
    // remove the note at given index
    // This line removes one element from the 'notes' array at the specified 'index' and stores the removed note(s) in the variable 'x'
    const x = notes.splice(index, 1);       // deleted Note ....
    console.log("deleted Notes :", x)
    res.send("Note deleted!");
});


// PATCH
app.patch("/notes/:index", (req, res)=>
    {
       notes[req.params.index].description = req.body.description;
       res.send("changed ");
    
})


app.listen(3000,()=>{
    console.log("server is running on : 3000")
});

