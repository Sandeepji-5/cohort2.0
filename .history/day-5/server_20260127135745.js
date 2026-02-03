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


app.listen(3000,()=>{
    console.log("server is running on : 3000")
});

app.delete("/notes/:index", (req, res) => {
    const index = req.params.index;
    // remove the note at given index
    notes.splice(index, 1);
    res.send("Note deleted!");
});


