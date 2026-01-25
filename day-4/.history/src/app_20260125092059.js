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



// get
app.get("/", (req, res) => {
    console.log("data got");
    res.status(200).json(notes);
});

// DELETE
app.delete("/notes/:index", (req, res) => {

    
    }
)

// PATCH - update title + description


module.exports = app;