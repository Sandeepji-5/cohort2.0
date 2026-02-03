const express = require('express')

const app = express();

app.use(express.json())
const notes = [];

// The line 'notes.push(req.body)' is necessary because it adds the note data 
// sent in the POST request to the 'notes' array. Without this line,
// the notes received from the client would not be stored anywhere, 
// and subsequent GET requests to retrieve notes would not include new notes.

    notes.push(req.body)
    res.send("note created from the Post...")
})


app.get('/notes',(req, res)=>{
    res.send(notes);
})

app.listen(3000,()=>{
    console.log("Server Is Running...")
})