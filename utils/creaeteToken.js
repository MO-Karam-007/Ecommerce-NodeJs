const jwt = require('jsonwebtoken')

exports.generateToken = (_id) =>
{
    return jwt.sign(
        { _id },
        process.env.JWT_SECRETKEY,
        { expiresIn: process.env.JWT_EXPIRE_TIME }
    )
}

// module.exports = generateToken