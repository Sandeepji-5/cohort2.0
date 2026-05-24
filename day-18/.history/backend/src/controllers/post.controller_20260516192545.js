const postModel = require("../models/postModel");
const ImageKit = require('@imagekit/nodejs');
const { toFile } = require('@imagekit/nodejs');
const likeModel = require("../models/like.model");

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
});

async function createPostController(req, res) {

    // const token = req.cookies|| req.cookies.token ;
    // const token = req?.cookies?.token;
    // console.log("cookies:", req.cookies);
    // console.log("token:", req.cookies.token);
    // if (!token) {
    //     return res.status(401).json({
    //         message: "token not provided , YUnauthorized user!!"
    //     })
    // }
    // let decode;
    // try {
    //     decode = jwt.verify(token, process.env.JWT_SECRET);
    // }
    // catch (err) {
    //     return res.status(401).json({
    //         message: "User Not Authorized!!"
    //     })
    // }
    // // console.log(decode);
    // console.log(req.body, req.file)




    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: req.file.originalname || "uploaded_image",
        folder: "Insta_clone"
    })


    const post = await postModel.create({
        caption: req.body.caption,
        imgUrl: file.url,
        user: req.user.id
    })

    return res.status(200).json({
        message: "Post Created SuccessFuly",
        id: post._id,
        caption: post.caption,
        imgUrl: post.imgUrl,
        user: post.user

    })
}



// User ne Jitne Api create kri hai usko show karana...
async function getPostController(req, res) {

// const token = req.cookies.token;
// let decode = null;



// try{
//    decode =  jwt.verify(token, process.env.JWT_SECRET)

// }
// catch(err){
//     return res.status(401).json({
//         message:"token is invalid .."
//     })
// }


let userId = req.user.id;

const posts = await postModel.find({ user: userId });

    res.status(200).json({
        message:"Post got successfully",
        posts

    })
}

// Kaun Post ko access kr skta hai?-  created user only..
async function getPostDetailsController(req, res){

// const token  =  req.cookies.token;
// if(!token){
//     return res.status(404).json({
//         message:"Unauthorized Accesss"
//     })
// }


// let decode ;
// try{
// decode =  jwt.verify(token, process.env.JWT_SECRET)
// }
// catch(err){
// return res.status(404).json({
//     message:"Invalid token ."
// })
// }

let userId = req.user.id;
let postId = req.params.postId;   //

const post = await postModel.findById(postId);

// we are converting Object id To  string because post.user is object id and userId is string so we need to convert it to string for comparision
let  isUserValid = post.user.toString() === userId;

if(!isUserValid){
    return res.status(403).json({
        message:"User Is Forbidden for this access.."
    })
}

return res.status(200).json({
    message:"Post Fetched SuccessFully....",
    post
})


}


async function  likePostController(req, res){

const username = req.user.username
const postId  =  req.params.postId

const post =    await postModel.findById(postId);
if(!post){
    return res.status(404).json({
        message:"Post is not found"
    })
}


const like =  await likeModel.create({
    user: username,
    post: postId
})

res.status(200).json({
    message: " Post Liked  Successfully",
    like
})
}



async function getFeedController(req, res) {
    try {
        const posts = await postModel
            .find()
            .populate("user").select("-password")  // password field ko exclude krne k liye
            .sort({ createdAt: -1 })  // Sort by createdAt in descending order (newest first);

            console.log("posts", posts)

        return res.status(200).json({
            message: "Feed fetched successfully",
            posts
        });
          

      

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch posts",
            error: error.message
        });
    }
}








module.exports = { createPostController, getPostController,getPostDetailsController , likePostController, getFeedController};






