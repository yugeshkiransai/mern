const {check} = require('express-validator')

exports.userSignUpValidator = [
    check('name')
    .not()
    .isEmpty()
    .withMessage('name is required'),
    check('email')
    
    .isEmail()
    .withMessage('email is required'),
    check('password')
    
    .isLength({min:6})
    .withMessage('password is required')
    
]