const express = require('express');
const router = express.Router();
const { getImages } = require('../controllers/imgController');

router.get('/api/image', getImages);

module.exports = router;