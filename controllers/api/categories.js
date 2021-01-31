const Category = require('../../models/category');

module.exports = {
  index,
};

async function index(req, res) {
  const cats = await Category.find({user:req.user._id});
  return res.status(200).json(cats);
}