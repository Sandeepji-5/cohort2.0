require("dotenv").config();
const express = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const authRouter = express.Router();
/* 
/api/auth/register   -- se access hoga...

*/
authRouter.post('/register', async(req, res)=>{ 
    
    const {name,email,password} = req.body;

    // Check if user already exists with the given email
    const userAlreadyExist = await userModel.findOne({ email });

    if (userAlreadyExist) {
        console.log("User details:", userAlreadyExist);
        return res.status(400).json({
            message: "User already exists with the same emailId"
        });
    }

    const user = await userModel.create({ name, email, password });

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_TOKEN
    );

    res.

    res.status(201).json({
        message:"User Registered Successfully",
        user,
        token
    }, process.env.JWT_SECRET)
})


module.exports = authRouter
