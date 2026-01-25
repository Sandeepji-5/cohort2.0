const express= require('express')

const app = express();

app.get('/',()=>(console.log("hello world")))

app.listen(4000)