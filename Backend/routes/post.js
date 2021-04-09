const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post');

router.get('/Feed', auth, postCtrl.getAllPosts);
router.post('/Feed', auth, multer, postCtrl.createPost);
router.get('/Feed/:id', auth, postCtrl.getOnePost);
router.put('/Feed/:id', auth, multer, postCtrl.modifyPost);
router.delete('/Feed/:id', auth, postCtrl.deletePost);
router.post('/Feed/:id/like', auth, postCtrl.likePost)

module.exports = router;