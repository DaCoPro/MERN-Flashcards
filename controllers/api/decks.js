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
  deckData.user = req.user;
  let newDeck = await Deck.create(deckData);
  return res.json(newDeck)
}

//obsolete but when deleted, DecksPage crashes.
async function addCard(req, res) {}

async function deleteDeck(req, res) {
  const owner = await Deck.findById(req.params.id);
  if (owner.user.toString() === req.user._id) {
    const removedDeck = await Deck.findByIdAndRemove(req.params.id);
    res.status(200).json(removedDeck);
  }
}