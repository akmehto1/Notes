const loginHandler=require('../controllers/login');


const router = require('express').Router()

const { loginLimiter } = require('../middleware/ratelimit');


router.post('/' ,loginLimiter,loginHandler)



module.exports  = router