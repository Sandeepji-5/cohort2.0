const mongoose = require("mongoose");
require('dotenv').config();

function connectToDb() {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => { console.log("connected To DataBase...."); })
        .catch((error) => { console.error("Database connection error:", error); });
}

module.exports = connectToDb;