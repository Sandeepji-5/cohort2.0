const express = require('express')
const app = express();


// get

const notes = [];
// app.get("/", (req, res) => {
// })

app.post("/notes", (req, res)=>{
    notes.push(req.body);
    console.log(notes)
})


app.listen(3000);




