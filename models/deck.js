const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String}
  }, {timestamps: true}
  );

module.exports = mongoose.model('Deck', deckSchema);