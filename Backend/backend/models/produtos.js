const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const produtoSchema = new Schema({ // Auto-generated ObjectId  
  id: { type: Number, required: true, unique: true },  
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String }
});

var Produto = mongoose.model('produtos', produtoSchema);
module.exports = Produto;