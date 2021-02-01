const express = require('express');
const router = express.Router();
const decksCtrl = require('../../controllers/api/decks');

router.get('/', decksCtrl.index);
router.post('/', decksCtrl.createDeck);
router.put('/:id/addCard', decksCtrl.addCard);
router.delete('/:id', decksCtrl.deleteDeck);

module.exports = router;