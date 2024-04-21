const validationMidlleware = require("../../middlewares/validateMiddleware")
const { check, body } = require('express-validator')
const slugify = require('slugify')
const User = require('../../models/User')


exports.signUpValidator = [
    check('email')
        .notEmpty().withMessage('Email required')
        .isEmail().withMessage("Not valid email")
        .custom((val) =>
        {
            return User.findOne({ email: val }).then((user) =>
            {
                if (user)
                {
                    return Promise.reject(new Error('Email has already been taken'))
                }

            })

        }),
    validationMidlleware
]