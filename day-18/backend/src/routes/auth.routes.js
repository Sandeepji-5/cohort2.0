const identifyingUser = require('../middlewares/auth.middleware')



const express = require('express')
const authController = require("../controllers/auth.controller")

const authRouter  =  express.Router()

authRouter.post('/register', authController.registerController )

authRouter.post("/login", authController.loginController)

authRouter.get("/get-me",identifyingUser, authController.getMeController )


// why here middlewere used
// The `identifyingUser` middleware is used to verify the user's authentication status and extract user information from the JWT token. This ensures that only authenticated users can access the "/get-me" endpoint and retrieve their own information.        

module.exports = authRouter



