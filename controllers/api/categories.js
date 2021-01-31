const Category = require('../../models/category');

module.exports = {
  index,
  createCat
};

async function index(req, res) {
  const cats = await Category.find({user:req.user._id});
  return res.status(200).json(cats);
}

async function createCat(req, res) {
  
  console.log(req.body);
  let catData = req.body;
  let newCat = await Category.create(catData);
  return res.json(newCat)
}