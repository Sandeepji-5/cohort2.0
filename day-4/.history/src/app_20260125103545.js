const express = require('express');

const app = express();               // Server is created

app.use(express.json());            // middleware........

const notes = [];                 //
console.log("This is my notes", notes);

// POST
app.post("/notes", (req, res) => {
    // console.log(req.body);
    notes.push(req.body);
    console.log("My notes is created", notes)
    res.status(201).json({
        message: "Note Created Successfully"
    });
});



// --------------------------
app.get("/", (req, res) => {
    console.log("data got");
    res.status(200).json(notes);
});

// delete

app.delete("/notes/:index", (req, res) => {
    const idx = parseInt(req.params.index, 10);
    if (isNaN(idx) || idx < 0 || idx >= notes.length) {
        return res.status(400).json({ error: "Invalid note index" });
    }
    notes.splice(idx, 1);
    res.json({ message: "Note deleted successfully" });
});

module.exports = app;