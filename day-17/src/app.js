const express =  require("express");
const cookieParser = require("cookie-parser")


const app = express();


/*Require routers  */
const authRouter = require("./routes/auth.routes");
const postRouter = require("./routes/post.routes");
const userRouter = require("./routes/user.routes");








app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/post",postRouter)
app.use("/api/users", userRouter)


module.exports = app

