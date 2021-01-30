const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');

router.get('/', decksCtrl.index);
router.post('/', decksCtrl.createDeck);


module.exports = router;
