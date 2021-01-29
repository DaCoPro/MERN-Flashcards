const Deck = require('../../models/deck');

module.exports = {
  index,
  create
};

async function index(req, res) {
  const decks = await Deck.find({});
  res.status(200).json(decks);
}

async function create(req, res) {
  req.body.user = req.user_id;
  
  const deck = await Deck.create(req.body);
  res.status(201).json(deck)
}