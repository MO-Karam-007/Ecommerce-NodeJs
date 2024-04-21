
const asyncHandler = require('express-async-handler');
const User = require('../models/User')
const ApiError = require('../utils/apiError');
const jwt = require('jsonwebtoken')


exports.protect = asyncHandler(async (req, res, nxt) =>
{
    let token;
    if (req.headers.authorization && (req.headers.authorization.split(' ')[0] === "Bears"))
    {
        token = req.headers.authorization.split(' ')[1]
        if (!token) nxt(new ApiError('Please try to login', 401))
    }

    // Check token validation and data
    const decode = jwt.decode(token, process.env.JWT_EXPIRE_TIME)

    // Check if user exists
    let existUser = await User.findById(decode._id)
    if (!existUser) nxt(new ApiError('This user doesn\'t exist anymore', 401))
    // Check if the password is chanced
    // if(existUser.passwordChangedAt){

    // }


    // Chack if the password is changed after token created

    req.user = existUser
    nxt();
}
)


exports.restrictTo = (...roles) => asyncHandler((req, res, nxt) =>
{
    if (!roles.includes(req.user.role)) nxt(new ApiError('you are unauthorized'))

    nxt();
})