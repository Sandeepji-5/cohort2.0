const express = require('express')

const app = express();

app.use(express.json())
const notes = [];

// This endpoint handles POST requests to '/notes'.
// When a POST request is received, it takes the data from the request body (usually containing note information),
// adds it to the 'notes' array, and then sends a confirmation response to the client.
app.post('/notes', (req, res) => {
    notes.push(req.body);
    res.send("note created from the Post...");
});


app.get('/notes',(req, res)=>{
    res.send(notes);
})

app.listen(3000,()=>{
    console.log("Server Is Running...")
})