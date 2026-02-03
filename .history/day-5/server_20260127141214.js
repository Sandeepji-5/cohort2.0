const express = require('express')
const app = express();
app.use(express.json());

// get
const notes = [];
app.get("/", (req, res) => {
    res.send(notes);
    console.log("notes from get:", notes)
})

app.post("/notes", (req, res) => {
    notes.push(req.body);
    console.log("notes", notes);
    res.send(notes);
});





app.delete("/notes/:index", (req, res) => {
    const index = req.params.index;
    // remove the note at given index
    // This line removes one element from the 'notes' array at the specified 'index' and stores the removed note(s) in the variable 'x'
    const x = notes.splice(index, 1);       // deleted Note ....
    console.log("deleted Notes :", x)
    res.send("Note deleted!");
});

app.patch("/notes/:index", (req, res)=>{
            


})


app.listen(3000,()=>{
    console.log("server is running on : 3000")
});

