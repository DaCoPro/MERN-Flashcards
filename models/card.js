const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const cardSchema = new Schema({
    question: {type: String, required: true},
    answer: {type: String, required: true},
    status: {type: Number},
    due: {type: Date},
    deck: {type: Schema.Types.ObjectId, ref: 'Deck', required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
});

module.exports = mongoose.model('Card', cardSchema);