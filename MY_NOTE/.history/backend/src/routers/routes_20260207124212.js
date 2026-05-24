require("dotenv").config();

const express = require('express')
const authRouter = express.Router()
const userModel = require('../model/userModel')


authRouter.post('/signUp', (req, res)=>{

const {name , email, password} =  req.body;
console.log("name", name)

const checkForExisting = userModel.find({email});
if(checkForExisting){
    return res.status().json({
        message:"User Already Exist",
    })
}

const signUpDetails = userModel.create({name, email, password});
res.status(200).json({
    message:" SignUp Successfully",
    signUpDetails
})
})
module.exports = authRouter