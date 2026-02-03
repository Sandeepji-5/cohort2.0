const express = require("express")

const app = express();
const noteModel = require("./models/notes.model")
app.use(express.json())

/* POST */
/* req.body => {title, description} */


app.post("/notes", (req, res) => {
    const { title, description } = req.body;
    noteModel.create({ title, description })
        .then(note => res.status(201).json(note))
        .catch(error => res.status(500).json({ error: error.message }));

})

app.get("/notes", async (req, res) => {
    try {
        const notes = await noteModel.find();
        res.status(200).json({
            message: "Thank you for requesting the notes.",
            notes
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = app;