const express = require('express')
const app = express();


// get
app.get("/", (req, res) => {
        console.log(res.send("Hello World!!"))
})
app.listen(3000);




