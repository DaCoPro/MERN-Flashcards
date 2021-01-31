const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: { type: String, required: true },
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true}
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Category', categorySchema);