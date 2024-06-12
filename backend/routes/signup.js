const signupHandler= require('../controllers/signup')

const router = require('express').Router()


router.post('/' ,signupHandler)


module.exports  = router