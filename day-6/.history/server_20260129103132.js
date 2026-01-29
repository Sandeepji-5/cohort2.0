/* 
- server ko database ke conect krna 
*/  
const app = require('./src/app');

const mongoose =  require('mongoose')

function connectToDb(){
    mongoose.connect('mongodb+srv://sandeepvishwakarmagkp5_db_user:XmbuXRYFwLtAFYdA@cluster0.wmw0epf.mongodb.net/day-6').then(()=>{})
    // hamari Uri cluster se connect hoti hai ab hame us cluster me database se connect krna hai...
}    

app.listen(3000, ()=>{console.log("server is running on Port : 3000")})  