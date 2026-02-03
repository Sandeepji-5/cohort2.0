const express  = require("express")

const app = express();
const noteModel = require("./models/notes.model")
app.use(express.json())

/* POST */
/* req.body => {title, description} */


app.post("/notes",(req, res)=>{
    const {title, description} = req.body;
noteModel.create({ title, description })
  .then(note => res.status(201).json(note))
  .catch(error => res.status(500).json({ error: error.message }));

})


app.get("/notes",async (req, res)=>{

const note=  await noteModel.find();
res.status(202).json({
    message:"   Thankou for providing notes..",
    note
})

})

module.exports = app;