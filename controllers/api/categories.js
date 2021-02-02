const Category = require('../../models/category');

module.exports = {
  index,
  createCat,
  deleteCat
};

async function index(req, res) {
  const cats = await Category.find({user:req.user._id});
  return res.status(200).json(cats);
}

async function createCat(req, res) {
  let catData = req.body;
  catData.user = req.user;
  console.log(catData.user)
  let newCat = await Category.create(catData);
  return res.json(newCat)
}

async function deleteCat(req, res) {
  const owner = await Category.findById(req.params.id);
  if (owner.user.toString() === req.user._id) {
    const removedCat = await Category.findByIdAndRemove(req.params.id);
    res.status(200).json(removedCat);
  } 
}