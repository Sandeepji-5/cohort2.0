const express = require('express')
const userModel = require('../models/user.model')
const authRouter = express.Router()
/* 
/api/auth/register   -- se access hoga...

*/
authRouter.post('/register', async(req, res)=>{
    const {name,email,password} = req.body;

    const userAlreadyExist = await userModel.find({email});
    if(userAlreadyExist){
        return res.status(400).json({
                   message:"User Is already exist  with same emailId"
        })
    }


    const user = await userModel.create({email, password,name})

    res.status(201).json({
        message:"User Registered Successfully",
        user
    })
})

module.exports = authRouter