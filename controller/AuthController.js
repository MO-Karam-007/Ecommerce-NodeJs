const { generateToken } = require('../utils/creaeteToken')

const asyncHandler = require('express-async-handler');
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const ApiError = require('../utils/apiError');
const jwt = require('jsonwebtoken')

// @desc    Signup
// @route   POST /api/v1/signup
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

// @desc    Login
// @route   POST /api/v1/login
// @access  Public
exports.logIn = asyncHandler(
    async (req, res, nxt) =>
    {
        // Validaton the inputs
        // Check the inputs in datanase
        const user = await User.findOne({ email: req.body.email })

        if (!user || (await bcrypt.compare(req.body.password, user.password))) nxt(new ApiError('Incorrect credentials', 401))

        const token = generateToken(user._id)

        delete user._doc.password

        res.status(201).json({ data: user, token })
    })



