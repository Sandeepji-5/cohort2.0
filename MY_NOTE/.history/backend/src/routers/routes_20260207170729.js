require("dotenv").config();

const express = require('express')
const authRouter = express.Router()
const userModel = require('../model/userModel')


authRouter.post('/signup', async (req, res) => {

    const { name, email, password } = req.body;
    console.log("name", name)

    const checkForExisting = await userModel.findOne({ email });
    if (checkForExisting) {
        return res.status(409).json({
            message: "User Already Exist",
        })
    }



    const signUpDetails = await userModel.create({ name, email, password });






    res.status(200).json({
        message: " SignUp Successfully",
        signUpDetails
    })
})





authRouter.post('/login', async (req, res) => {
    const { email, password } = req.body

    const emailCheck = await userModel.findOne({ email });
    if (!emailCheck) {
        return res.status(404).json({
            message: "User Doesnt Exist , fill Email again"

        })
    }


    const checkPassword = await userModel.findOne({ password });
    if (!checkPassword) {
        return res.status(401).json({
            message: "Password Incorrect"
        })
    }

    const login = await userModel.find({ email, password });

    if (login) {
        return res.status(200).json({
            message: "User Signed In"

        })
    }
    else {
        return res.status(500).json({
            message: "Something went wrong"
        })
    }

})









module.exports = authRouter