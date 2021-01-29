const Deck = require('../../models/deck');

module.exports = {
  index
};

async function index(req, res) {
    const decks = await Deck.find({});
    res.status(200).json(decks);
}

