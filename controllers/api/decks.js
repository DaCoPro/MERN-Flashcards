const Deck = require('../../models/deck');

module.exports = {
  index,
  createDeck
};

async function index(req, res) {
  const decks = await Deck.getAll(req.user._id);
  res.status(200).json(decks);
}

async function createDeck(req, res) {
  // const deck = await Deck.getAll(req.user._id);
  // await Deck.create()


  // req.body.user = req.user_id;
  
  // const deck = await Deck.create(req.params.id);
  // res.status(201).json(deck)
}