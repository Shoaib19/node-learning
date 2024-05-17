const express = require('express');
const router = express.Router();
const {blogIndex, blogCreateGet, blogCreatePost, blogDelete, blogDetail} = require('../controllers/blogConroller')

router.get('/', blogIndex);

router.post('/', blogCreatePost)

router.get('/create', blogCreateGet)

router.get('/:id', blogDetail)

router.delete('/:id', blogDelete)

module.exports = router;