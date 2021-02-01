const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('./category');



const deckSchema = new Schema({
    name: {type: String, required: true},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
});


module.exports = mongoose.model('Deck', deckSchema);

