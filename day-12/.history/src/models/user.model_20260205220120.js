const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name: String,
    // The original code is mostly correct for enforcing email uniqueness, but the format for the `unique` field should be a boolean.
    // If you want a custom error message, you need to handle it in error handling logic, not in the schema itself.
    // So, the appropriate way is:
    email: {
        type: String,
        unique: true, // This will enforce unique values
        required: [true, "Email is required"],
    },
    password: String
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel