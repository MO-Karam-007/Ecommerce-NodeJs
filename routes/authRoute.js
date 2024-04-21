const express = require('express')
const authController = require('../controller/AuthController')
const router = express.Router();
const { signUpValidator } = require('../utils/validators/AuthValidation')

router.post('/signup', signUpValidator, authController.signUp)



module.exports = router