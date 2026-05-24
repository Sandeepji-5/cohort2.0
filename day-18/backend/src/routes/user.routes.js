const express = require('express');
const indentifyingUser = require('../middlewares/auth.middleware')
const userRouter  = express.Router();
const userController = require('../controllers/user.controller')
/* 
*@route POST/api/users/follow/:userid
*@description Follow a user
@access  private



*/



userRouter.post('/follow/:username', indentifyingUser,userController.followUserController)  // it is used to follow the user by using username which is coming from frontend and also we are using middlewere to identify the user who is following the user


userRouter.post('/unfollow/:username', indentifyingUser,userController.unfollowUserController)// it is used to unfollow the user by using username which is coming from frontend and also we are using middlewere to identify the user who is unfollowing the user




module.exports = userRouter;


