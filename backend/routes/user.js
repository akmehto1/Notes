const router = require('express').Router()
const {post,profile,createPost,delete_controller}=require('../controllers/user');
const auth=require('../middleware/auth');

router.get('/profile' ,auth,profile);
router.post('/createpost',auth,createPost);
router.get('/post' ,auth,post);
router.delete('/delete/:id',delete_controller);



module.exports  = router;

