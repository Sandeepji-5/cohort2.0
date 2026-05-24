const express  = require("express")
const multer = require('multer')
//
const identifyingUser = require('../middlewares/auth.middleware')
const upload = multer({storage:multer.memoryStorage()})
const postController = require('../controllers/post.controller');
const postRouter = express.Router();

postRouter.post("/createPost",upload.single('d'),identifyingUser,postController.createPostController)

postRouter.get("/", identifyingUser,postController.getPostController)
postRouter.get("/details/:postId", identifyingUser,postController.getPostDetailsController)

postRouter.post('/like/:postId', identifyingUser, postController.likePostController)


/* chacha----  same file name which is sending by frontend.. */


module.exports = postRouter;







