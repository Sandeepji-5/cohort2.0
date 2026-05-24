const express  = require("express")
const multer = require('multer')

const upload = multer({storage:multer.memoryStorage()})
const postController = require('../controllers/post.controller');
const postRouter = express.Router();

postRouter.post("/createPost",upload.single('DS'),postController.createPostController)

postRouter.get("/", postController.getPostController)

/* chacha----  same file name which is sending by frontend.. */


module.exports = postRouter;


