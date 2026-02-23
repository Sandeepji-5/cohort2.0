const express = require('express');
const indentifyingUser = require('../middlewares/auth.middleware')
const userRouter  = express.Router();
const userController = require('../controllers/user.controller')
/* 
*@route POST/api/users/follow/:userid
*@description Follow a user
@access  private



*/

userRouter.post('/follow/:username', indentifyingUser,userController.followUserController)
userRouter.post('/unfollow/:username', indentifyingUser,userController.unfollowUserController)




module.exports = userRouter;


