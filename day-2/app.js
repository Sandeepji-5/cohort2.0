const express =  require('express'); // create serever

const app = express();      // create instance...

app.get('/', (req, res)=> {res.send("Hello world")})   // 
app.get('/about', (req, res)=> {res.send(" This an about page .")})   // 

app.listen(3000);        // star server

