const express = require('express');

const app = express(); // Server is created

app.use(express.json)  // middleware

// POST

const notes = [];
app.post("/notes",(req, res)=>{
    console.log(req.body);
    notes.push(req.body)

    // res.status(201).json({
    //     message:"Notes Created Success"
    // })
})

//delete

app.delete("/notes/:mama", (req, res)=>{
    delete notes[req.params.mama]


})

// Patch
//tite+desxcription - update
// app.patch("/notes/:index", (req, res)=>{
//     notes[req.params.index].description = 
// })


module.exports = app;