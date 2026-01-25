const express = require('express');

const app = express(); // Server is created

app.get("/", (req, res) => {
    res.send("Hello World Bhai Sahab....!!!");
});

module.exports = app;