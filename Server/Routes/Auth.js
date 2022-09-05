const express = require('express')
const router = express.Router()
const {signup} = require('../Controllers/auth')

const {userSignupValidator} = require('../Validators/Auth')
const {runValidation} = require('../Validators')

router.post('/signup',userSignupValidator,runValidation,signup)

module.exports = router