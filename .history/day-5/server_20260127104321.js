const express = require('express')
const app = express();


// get
app.get("/", (req, res) => {
        console.log(res.send())
})
app.listen(3000);




