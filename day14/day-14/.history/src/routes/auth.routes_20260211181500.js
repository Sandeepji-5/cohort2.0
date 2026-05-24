const userModel =  require('../models/userModel')
const crypto  = 




authRouter.post('/register', async(req, res)=>{
const {email,userName, password, bio, profileImage } = req.body;

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


const isUserAlreadyExists = await userModel.findOne({
    $or: [
            {userName},
            {email}

    ]
})












})

