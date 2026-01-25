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
const index = 0;
app.delete("/notes/:index", (req, res) => {
    
   
    console.log(`Deleted note at index ${index}. Remaining notes:`, notes);
    res.status(200).json({ message: "Note deleted successfully" });
});

module.exports = app;