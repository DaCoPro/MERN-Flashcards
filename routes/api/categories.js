const express = require('express');
const router = express.Router();
const catsCtrl = require('../../controllers/api/categories');

router.get('/', catsCtrl.index);
router.post('/', catsCtrl.createCat);

module.exports = router;