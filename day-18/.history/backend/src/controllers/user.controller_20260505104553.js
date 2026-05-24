const followModel = require('../models/followModel');
const userModel = require('../models/userModel')



async function followUserController (req, res){

const followerUsername = req.user.username;
const followeeUsername =  req.params.username;

if(followerUsername == followeeUsername){
    return res.status(400).json({
        message:"You Can not follow Yourself",

    })
}
// kya wo user exist bhi krta hai jise aap follow krne ka prayas kr rhe ho..


const isFolloweeExist = await userModel.findOne({
    username: followeeUsername
})


if(!isFolloweeExist){
    return res.status(400).json({
    message:" followee doesnt exist whom you tring to follow"
    })
}




// if already following to someOne then again cant follow that person 
const alreadyFollow = await followModel.findOne({
    follower:followerUsername,
    followee:followeeUsername
})
if(alreadyFollow){
    return res.status(409).json({
        message:`You are already following ${followeeUsername}`
    })
}




const followRecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername
})




res.status(201).json({
    message:`You are now following ${followeeUsername}`,
    follow:followRecord
})
}


async function unfollowUserController( req, res){

const followerUsername  =  req.user.username
const followeeUsername =  req.params.username

const isUserFollowing  = await followModel.findOne({

    follower: followerUsername,
    followee: followeeUsername
})

if(!isUserFollowing){
    return res.status(200).json({
        message:`You are Not following ${followeeUsername}`
    })

}

// now unfollow;;;;;;

 await followModel.findByIdAndDelete(
        isUserFollowing._id
)

res.status(200).json({
    message:`You have Unfollowed  the ${followeeUsername}`
}) 
}






module.exports = {followUserController, unfollowUserController}