const mongoose = require('mongoose')
const noteSchema = new mongoose.Schema(
    {
    title: String,
    description: Number
    })

    const  noteModel = mongoose.model("notes", noteSchema);
    module.exports = noteModel;


