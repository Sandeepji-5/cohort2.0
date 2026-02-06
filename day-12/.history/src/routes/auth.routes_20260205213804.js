const express = require('express')
const userModel = require('../models/user.model')
const authRouter = express.Router()

authRouter.post('register', (req, res)=>{
    const {name, email,password} = req.body

    const user = await 
})

module.exports = authRouter