const app =  require('./src/app')


app.use(express());


app.listen(3000, ()=>{
    console.log("Server is running on the PORT 3000")
})