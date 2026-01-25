const express = require('express');

const app = express(); // Server is created

app.use(express.json)  // middleware

// POST

app.post("/notes",(req, res)=>{
    console.log(req.body);
    notes.push(req.body)

    res.status(201).json({
        message:"Notes Created Success"
    })
})


module.exports = app;