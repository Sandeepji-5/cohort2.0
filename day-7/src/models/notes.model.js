const mongoose= require("mongoose");


const noteSchema = new mongoose.Schema({
title:String,
description:String
})

const noteModel = mongoose.model("notes", noteSchema)

// notes:- is  a collection where all the notes are stored...   

module.exports = noteModel