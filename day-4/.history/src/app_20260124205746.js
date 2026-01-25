const express = require('express');

const app = express(); // Server is created

app.use(express.json)  // middleware

// POST

app.post("/notes",(req, res)=>{
    console.log(req.body);
    
})


module.exports = app;