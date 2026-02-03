const express = require('express')
const app = express();


// get
app.get("/", (req, res) => {
        console.log(res.send("Hello World!!"))
})

app.post("/notes", (req, res)=>{
    
    req.send();
})

app.listen(3000);




