const mongoose = require('mongoose')
const noteSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        age: {
            type: Number,
            required: true,
            min: 0
        }
    },
    {
        timestamps: true
    }
)


    const  noteModel = mongoose.model("notes", noteSchema);

    module.exports = noteModel;