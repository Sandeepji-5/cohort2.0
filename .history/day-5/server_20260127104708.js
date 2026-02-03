const express = require('express')
const app = express();


// get
app.get("/", (req, res) => {
        console.log(res.send("Hello World!!"))
})

app.post("/notes", (req, res)=>{
    console.log("notes posted")
})

app.listen(3000);




