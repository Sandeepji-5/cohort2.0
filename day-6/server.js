/* 
- server ko database ke conect krna 
*/  
const app = require('./src/app');

const mongoose =  require('mongoose')

function connectToDb()
{
    mongoose.connect('URI COPIED FROM THE MONGODB  COMPASS /day-6').then(()=>{console.log("connected To DataBase....")})
    // hamari Uri cluster se connect hoti hai ab hame us cluster me database se connect krna hai...
    // ydi database created nhi hai to / ke bad jo likhenge wo database ban jayegi...= /day-6
}    


connectToDb()

app.listen(3000, ()=>{console.log("server is running on Port : 3000")})  
