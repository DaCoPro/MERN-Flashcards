const Card = require('../../models/card');

module.exports = {
  index,
  createCard,
  updateCard,
  deleteCard,
  deleteChildCards
};

async function index(req, res) {
  const cards = await Card.find({user:req.user._id});
  return res.status(200).json(cards);
}

async function createCard(req, res) {
  let cardData = req.body;
  let newCard = await Card.create(cardData);
  return res.json(newCard)
}

async function updateCard(req, res) {
  const updatedCard = await Card.findByIdAndUpdate(req.body._id, req.body, {
    new: true,
  });
  res.status(200).json(updatedCard);
}

async function deleteCard(req, res) {
  const removedCard = await Card.findByIdAndRemove(req.params.id);
  res.status(200).json(removedCard);
}

async function deleteChildCards(req, res) {
  console.log(`David`)
  const removedCards = await Card.deleteMany({deck: req.params.id})

  res.status(200).json(removedCards);
}