/* 
- server ko database ke conect krna 
*/  
const app = require('./src/app');

const mongoose =  require('mongoose')

function connectToDb(){
    
}    

app.listen(3000, ()=>{console.log("server is running on Port : 3000")})  