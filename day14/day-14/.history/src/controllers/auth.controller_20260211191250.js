const userModel = require('../models/userModel');
const crypto  = require('crypto');





async function registerController(req, res)
{
    const {email, username, password, bio, profileImage } = req.body

    const isUserAlreadyExists = await userModel.findOne(
        {
            $or: [
                    {username},
                    {email}
                ]
        }
    );
    if(isUserAlreadyExists){
        return res.status().json({
            message: "User Already Exixt By"+(isUserAlreadyExists.email == email)? "UserName" :"Email"
        })
    }
    
    const userCreated = await userModel.create({
        username, email, password, bio, profileImage}
    )
    
    return res.status(344).json({
        message:"User Created Successfully...",
        userCreated
    })
}


