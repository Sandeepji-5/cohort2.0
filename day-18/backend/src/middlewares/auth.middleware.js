
const jwt = require('jsonwebtoken')

async function indentifyingUser(req, res, next){

    const token  = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: "token not provided , Unauthorized user!!"
        })
    }
    let decode;
    
    try {
        // Verify the token and decode it to get the user information 
        decode = jwt.verify(token, process.env.JWT_SECRET);
    }
    catch (err) {
        return res.status(401).json({
            message: "User Not Authorized!!"
        })
    }

    req.user = decode;// it gives which can be used by everyOne
    next()// it is used to move to the next middleware or route handler in the Express.js application
}

/* req.user    -- it gives which can be used by everyOne*/


module.exports = indentifyingUser;
