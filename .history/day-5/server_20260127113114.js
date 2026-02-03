const express = require('express')
const app = express();

app.use(express.json());


// get

const notes = [];

app.get("/", (req, res) => {
    res.send(notes)
})

app.post("/notes", (req, res)=>{
    notes.push(req.body);
    // const {description} = req.body;
    // console.log(description);
    console.log("notes", notes)
    res.send("notes created at ....the", notes)
})


app.listen(3000,()=>{
    console.log("server is running on : 3000")
});




