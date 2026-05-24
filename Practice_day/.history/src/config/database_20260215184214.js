const mongoose =   require('mongoose');


function connectToDB(){

    mongoose.connect(process.env.MONGGO_URI).then(()=>{
        console.log("MOngoDB Connected Successfully...")
    })


}


export default connectToDB

