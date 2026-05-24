const mongoose  = require('mongoose')

const connectToDb = ()=>{

mongoose.connect(procces.env.MY_DATABASE)

}
export default connectToDb






