const express = require('express');

const app = express(); // Server is created

app.use(express.json());  // middleware

const notes = [];

// POST
app.post("/notes", (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    res.status(201).json({
        message: "Note Created Successfully"
    });
});

// DELETE
app.delete("/notes/:index", (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (isNaN(index) || index < 0 || index >= notes.length) {
        return res.status(404).json({ message: "Note not found" });
    }
    notes.splice(index, 1);
    res.json({ message: "Note deleted successfully" });
});

// PATCH - update title + description
app.patch("/notes/:index", (req, res) => {
    const index = parseInt(req.params.index, 10);
    if (isNaN(index) || index < 0 || index >= notes.length) {
        return res.status(404).json({ message: "Note not found" });
    }
    const { title, description } = req.body;
    if (title !== undefined) notes[index].title = title;
    if (description !== undefined) notes[index].description = description;
    res.json({ message: "Note updated successfully", note: notes[index] });
});

module.exports = app;