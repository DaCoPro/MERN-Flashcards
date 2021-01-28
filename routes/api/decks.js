const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');

router.get('/', decksCtrl.index);


module.exports = router;
