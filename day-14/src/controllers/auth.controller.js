const userModel = require('../models/userModel');
const crypto = require('crypto');
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
    const hash = crypto.createHash('sha256').update(password).digest('hex')
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

    const isPasswordValid = (crypto.createHash('sha256').update(password).digest('hex') == user.password);
    console.log("I reached here");

    if (!isPasswordValid) {
        return res.status(401).json({
            message: "Password Invalid !"
        })
    }

    const token = jwt.sign(
        { id: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
    )

    res.cookie("token", token);

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

module.exports = {
    registerController,
    loginController

}

