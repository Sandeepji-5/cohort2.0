const express = require('express')
const app = express();

app.use(express.json());


// get

const notes = [];
// app.get("/", (req, res) => {
// })

app.post("/notes", (req, res)=>{
    // notes.push(req.body);

    const {description} = req.body;
    
    console.log(description);
    res.send("notes created at ....", description)
})


app.listen(3000,()=>{
    console.log("server is running on : 3000")
});




