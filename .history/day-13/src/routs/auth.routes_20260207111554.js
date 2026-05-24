require("dotenv").config();
const express = require('express');
const jwt = require('jsonwebtoken');
const userModel = require('../models/user.model');
const authRouter = express.Router();

    

/* 
/api/auth/register   -- se access hoga...
*/
authRouter.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
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
    res.cookie("jwt_token", token);
    res.status(201).json({
        message: "User Registered Successfully",
        user,
        token
    }, process.env.JWT_SECRET)
})




/* server will get to know which cookies is available...     */
authRouter.post('/protect   ed', async (req, res) => {
    console.log("cookies ", req.cookies)
    res.status(200).json({
        message: " This is a protected route"
    })
})




authRouter.post("/login", async (req, res) => {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    // accound exixt krta hai ya nhi..
    if (!user) {
        return res.status(404).json({
            message: " User not found with this email address"
        })
    }

    // password match krta hai ya nhi.......................
    const isPasswordMatched = user.password === password;
    if (!isPasswordMatched) {
        return res.status(404).json({
            message: "Password is Incorrect"
        })
    }


    const token = jwt.sign({
        id: user._id,
    }, process.env.JWT_TOKEN)
    res.status(200).json({
        message: "User Logged In",
        user,
        token
    })

})



module.exports = authRouter

