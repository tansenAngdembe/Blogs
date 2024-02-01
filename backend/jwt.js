const jwt = require("jsonwebtoken")

const secret = process.env.JWT_SECRET_KEY



// const token = jwt.sign(payload,secret,{expiresIn:"24h"}) // 5d for five days
const genToken = (user) => {
    const token = jwt.sign({ name: user.name, id: user._id }, secret)
    // console.log(token)
    return token
}

// verification middleware
const verifyToken = (req, res, next) => {
    const ascessToken = req.cookies["ascess_token"];
    if (!ascessToken)
        return res.status(400).json({ err: "User not authenticated" })
    try {
        const validToken = jwt.verify(ascessToken, secret)
        if (validToken) {
            req.authenticated = true
            return next()
        }
    } catch (error) {
        return res.status(400).json({ err: error })
    }
}



module.exports = {
    genToken,
    verifyToken
}


