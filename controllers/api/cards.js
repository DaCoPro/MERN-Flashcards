const Card = require('../../models/card');

module.exports = {
  index,
  createCard,
  
};

async function index(req, res) {
  const cards = await Card.find({user:req.user._id});
  console.log(cards);
  return res.status(200).json(cards);
}

async function createCard(req, res) {
  
  console.log(req.body);
  let cardData = req.body;
  let newCard = await Card.create(cardData);
  return res.json(newCard)
}