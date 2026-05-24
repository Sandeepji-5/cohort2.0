const express =  require("express");
const cookieParser = require("cookie-parser")
const CORS = require('cors')

const app = express();

/*Require routers  */
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const userRouter = require("./routes/user.routes");



app.use(CORS(
    {
          origin:"http://localhost:5173",
          credentials:true,      // backend ka server frontend pr cookies set kr ske
    }
))
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/post",postRouter)
app.use("/api/users", userRouter)


module.exports = app


