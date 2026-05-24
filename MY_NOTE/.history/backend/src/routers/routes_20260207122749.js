const express = require('express')

const authRouter = require('router')
const userModel = require('../model/userModel')


authRouter.post('/signup', (req, res)=>{

const {name , email, password} =  req.body;

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