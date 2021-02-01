const Deck = require('../../models/deck');

module.exports = {
  index,
  createDeck,
  addCard,
  deleteDeck
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

//obsolete but when deleted, deckspage crashes.
async function addCard(req, res) {}

async function deleteDeck(req, res) {
  const removedDeck = await Deck.findByIdAndRemove(req.params.id);
  console.log(req.params.id)
  res.status(200).json(removedDeck);
}