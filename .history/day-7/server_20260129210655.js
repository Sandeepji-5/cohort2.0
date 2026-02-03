const app = require('./src/app')
const mongoose  = require('mongoose')

function connectToDb()
{
    mongoose.connect('mongodb+srv://sandeepvishwakarmagkp5_db_user:XmbuXRYFwLtAFYdA@cluster0.wmw0epf.mongodb.net/day-7').then(()=>{console.log("connected To DataBase....")})
    // hamari Uri cluster se connect hoti hai ab hame us cluster me database se connect krna hai...
    // ydi database created nhi hai to / ke bad jo likhenge wo database ban jayegi...= /day-6
}


app.listen(3000, (req, res)=>{
    console.log("Server is running on port: 3000")
})