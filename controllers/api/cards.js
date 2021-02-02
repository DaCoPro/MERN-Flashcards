const Card = require('../../models/card');
const Deck = require('../../models/deck');

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
  cardData.user = req.user;
  let newCard = await Card.create(cardData);
  return res.json(newCard)
}

async function updateCard(req, res) {
  if ( req.body.user === req.user._id) {
    const updatedCard = await Card.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCard);
  }
}

async function deleteCard(req, res) {
  const owner = await Card.findById(req.params.id);
  if (owner.user.toString() === req.user._id) {
    const removedCard = await Card.findByIdAndRemove(req.params.id);
    res.status(200).json(removedCard);
  }
}

async function deleteChildCards(req, res) {
  if (req.body.user === req.user_id) {
    const removedCards = await Card.deleteMany({deck: req.params.id})
    res.status(200).json(removedCards);
  }
}