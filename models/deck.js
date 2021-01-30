const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('./category');

const Cards = new Schema({
    question: {type: String, required: true},
    answer: {type: String, required: true},
    status: {type: Number},
    due: {type: Date}
});

const deckSchema = new Schema({
    name: {type: String, required: true},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    cards: [Cards],
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
});


module.exports = mongoose.model('Deck', deckSchema);

