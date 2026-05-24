const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");
async function registerController(req, res) {
    const { username, email, password, bio, profileImage } = req.body

    const isUserAlreadyExists = await userModel.findOne(
        {
            $or: [
                { username },
                { email }
            ]
        }
    );

    if (isUserAlreadyExists) {
        return res.status(409).json({
            message: "User Already Exixt By" + (isUserAlreadyExists.email == email ? "Email" : "username")
        })
    }
    const hash = await bcrypt.hash(password, 10)
    const user = await userModel.create(
        {
            username,
            email,
            password: hash,
            bio,
            profileImage
        }
    )

    const token = jwt.sign(
        {
            id: user._id,
            username: user.username
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

async function loginController(req, res) {

    // username  or email  , password
    const { email, username, password } = req.body

    const user = await userModel.findOne(
        {
            $or: [
                {
                    username: username
                },

                {
                    email: email
                }
            ]
        }
    )


    if (!user) {
        return res.status(404).json({
            message: "user not found!!",
        })

    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    console.log("I reached here");

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Password Invalid !"
        })
    }

    const token = jwt.sign(
        { id: user._id , username: user.username},
         process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )

    // res.cookie("token", token);

    res.cookie("token", token, {
        httpOnly: true,
        secure: false,      // true only in HTTPS (production)
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000 // 1 day
    });

    return res.status(200).json(
        {
            message: " User Login SuccessFullySuccessfully!",
            user: {
                username: user.username,
                email: user.email,
                bio: user.bio,
                profileImage: user.profileImage
            }

        })
}


async function getMeController(req, res){

const userId = req.user.id;
console.log("userid", userId)
const user = await userModel.findById(userId);
if(!user){
    return res.status(404).json({
        message:"User not Found Bro..."
    })
}

res.status(200).json({
    message:"User found ..",
    user:
    {
        username : user.username,
        email: user.email,
        bio: user.bio,
        profileImage:user.profileImage
    }
})
}


module.exports = {
    registerController,
    loginController,
    getMeController

}




