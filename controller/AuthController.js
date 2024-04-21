const { generateToken } = require('../utils/creaeteToken')

const asyncHandler = require('express-async-handler');
const User = require('../models/User')



// @desc    Signup
// @route   GET /api/v1/auth/signup
// @access  Public
exports.signUp = asyncHandler(
    async (req, res, nxt) =>
    {
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        })

        const token = generateToken(user._id)

        res.status(201).json({ data: user, token })
    })