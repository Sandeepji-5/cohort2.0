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
        console.log(" user details", userAlreadyExist)
        return res.status(400).json({
                   message:"User Is already exist  with same emailId"

        })
    }


    const user = await userModel.create({name, email, password})

    const token =  jwt.sign({
        id: user._id,
        email:user.email
    })

    res.status(201).json({
        message:"User Registered Successfully",
        user,
        token
    }, process.env.JWT_SECRET)
})


module.exports = authRouter
