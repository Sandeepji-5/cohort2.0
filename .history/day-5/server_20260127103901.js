const express = require('express')
const app = express();


// get
app.get("/", (req, res) => {
    console.log("Hello world!!!");
})
app.listen(3000);




