const Deck = require('../../models/deck');

module.exports = {
  index
};

async function index(req, res) {
  const decks = await Deck.find({}).exec();
  // re-sort based upon the sortOrder of the categories
//   items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(decks);
}

