const express = require('express');

const app = express();// server create Ho jata hai 

app.get("/",(req, res)=>(console.log("HEllo World Bhai Sahab....!!!")))

module.exports = app;