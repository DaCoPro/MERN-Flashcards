const Deck = require('../../models/deck');

module.exports = {
  index,
  createDeck,
  addCard
};

async function index(req, res) {
  const decks = await Deck.find({user:req.user._id});
  
  return res.status(200).json(decks);
}

async function createDeck(req, res) {
  let deckData = req.body;
  let newDeck = await Deck.create(deckData);
  return res.json(newDeck)
}

async function addCard(req, res) {
  const deck = await Deck.findById(req.body.deck);
  deck.cards.push(req.body);
  deck.save();
  console.log(deck.cards)
  return res.json(deck.cards);
}