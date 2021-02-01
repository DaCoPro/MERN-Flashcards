const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/api/cards');

router.get('/', cardsCtrl.index);
router.post('/', cardsCtrl.createCard);
router.delete('/:id', cardsCtrl.deleteCard);
router.put("/:id", cardsCtrl.updateCard);

module.exports = router;