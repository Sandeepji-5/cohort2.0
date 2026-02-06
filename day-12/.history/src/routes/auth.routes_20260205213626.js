const express = require('express')

const authRouter = express.Router()

authRouter.post('register', (req, res)=>{
    const {name, email,password} = req
})

module.exports = authRouter