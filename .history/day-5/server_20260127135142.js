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
    const index = parseInt(req.params.index, 10);
    if (!Number.isInteger(index) || index < 0 || index >= notes.length) {
        return res.status(400).json({ error: "Invalid index" });
    }
    const deletedNote = notes.splice(index, 1);
    console.log(`Deleted note at index ${index}:`, deletedNote[0]);
    res.status(204).send();
});


