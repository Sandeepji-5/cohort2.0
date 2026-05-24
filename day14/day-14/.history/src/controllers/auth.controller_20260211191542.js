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
        return res.status(409).json({
            message: "User Already Exixt By"+(isUserAlreadyExists.email == email? "Email" :"username")
        })
    }
    
    const user = await userModel.create(
        {
        username,
        email, 
        password:hash,
        bio,
        profileImage}
    )
    
    return res.status(344).json({
        message:"User Created Successfully...",
        userCreated
    })
}


