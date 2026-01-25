const express = require('express');

const app = express(); // Server is created

// app.get("/", (req, res) => {
//     res.send("Hello World Bhai Sahab....!!!");
// });

// POST

app.post("/notes",(req, res)=>{
    console.log(req.body);
})


module.exports = app;