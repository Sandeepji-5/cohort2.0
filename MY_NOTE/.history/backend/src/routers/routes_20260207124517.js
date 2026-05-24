require("dotenv").config();

const express = require('express')
const authRouter = express.Router()
const userModel = require('../model/userModel')


authRouter.post('/signUp', async(req, res)=>{

const {name , email, password} =  req.body;
console.log("name", name)

const checkForExisting = await userModel.find({email});
if(checkForExisting){
    return res.status(409).json({
        message:"User Already Exist",
    })
}

const signUpDetails = await userModel.create({name, email, password});
res.status(200).json({
    message:" SignUp Successfully",
    signUpDetails
})
})
module.exports = authRouter