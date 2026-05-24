const mongoose  = require('mongoose')

const connectToDb = ()=>{

mongoose.connect(procces.env.MY_DATABASE).then(()=>{
    console.log("mongoDB connected Successfully")
})

}
export default connectToDb






