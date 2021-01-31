const Deck = require('../../models/deck');

module.exports = {
  index,
  createDeck
};

async function index(req, res) {
  const decks = await Deck.find({user:req.user._id});
  
  return res.status(200).json(decks);
}

async function createDeck(req, res) {
  
  console.log(req.body);
  let deckData = req.body;
  let newDeck = await Deck.create(deckData);
  return res.json(newDeck)
}