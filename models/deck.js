const mongoose = require('mongoose');

require('./category');
const deckSchema = require('./deckSchema');

module.exports = mongoose.model('Deck', deckSchema);