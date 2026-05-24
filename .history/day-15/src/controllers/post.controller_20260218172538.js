const postModel = require("../models/postModel");
const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const jwt = require('jsonwebtoken'); // Added missing jwt import
const userModel = require("../models/userModel");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function createPostController(req, res) {

    // const token = req.cookies|| req.cookies.token ;
    const token = req?.cookies?.token;
    console.log("cookies:", req.cookies);
    console.log("token:", req.cookies.token);

    if (!token) {
        return res.status(401).json({
            message: "token not provided , YUnauthorized user!!"
        })
    }
    let decode;

    try {
        decode = jwt.verify(token, process.env.JWT_SECRET);
    }
    catch (err) {
        return res.status(401).json({
            message: "User Not Authorized!!"
        })
    }

    // console.log(decode);

    console.log(req.body, req.file)
    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: req.file.originalname || "uploaded_image",
        folder: "Insta_clone"
    })


    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: decode.id
    })

    return res.status(200).json({
        message: "Post Created SuccessFuly",
        id: post._id,
        caption: post.caption,
        imgUrl: post.imgUrl,
        user: post.user

    })
}


async function getPostController(req, res) {

const token = req.cookies.token;
let decode = null;



try{
   decode =  jwt.verify(token, process.env.JWT_SECRET)

}
catch(err){
    return res.status(401).json({
        message:"token is invalid .."
    })
}


let userId = decode.id;

const posts = await postModel.find({ user: userId });

    res.status(200).json({
        message:"Post got successfully",
        posts

    })
}



asyc 
 



module.exports = { createPostController, getPostController };


