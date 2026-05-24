const userModel =  require('../models/userModel')
const crypto  = 




authRouter.post('/register', async(req, res)=>{

const {email,username, password, bio, profileImage } = req.body;

// const isUserExistByEmail = await  userModel.findOne({email});

// if(isUserExistByEmail){

//     return res.status().json({
//         message:""
//     })
// }

// const iseUserExistByUserName = await userModel.findOne({userName});

// if(iseUserExistByUserName){
//     return res.status().json({
//         message:""
//     })
// }


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
        message: "User Already Exixt By"+(username == users.username)? "UserName" :"Email"
    })
}

const userCreated = await userModel.create({
    username, email, password, bio, profileImage



})

return res.status(344).json({
    message:"User Created Successfully...",
    userCreated
})


})



module.exports = authRouter