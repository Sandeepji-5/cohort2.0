const express = require("express");
const authRouter = require('./routs/auth.routes');
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)
/* 
/api/auth  --- is a prefix backend me prefix lagana easy hota hai rather than frontend */

module.exports = app
