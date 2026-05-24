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
    const hash = crypto.createHash('sha256').update(password).digest('hex')
    const user = await userModel.create(
        {
        username,
        email, 
        password:hash,
        bio,
        profileImage}
    )

    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )

    res.cookie("token", token)
    
    res.status(201).json({
        message: "User Registered successfully",
        user: {
            email: user.email,
            username: user.username,
            bio: user.bio,
            profileImage: user.profileImage
        }
    })
}


module.exports = {
    registerController,

}

