const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingressoSchema = new Schema({ // Auto-generated ObjectId  
  id: { type: Number, required: true, unique: true },  
  name: { type: String, required: true },
  price: { type: String, required: true }
});

var Ingresso = mongoose.model('ingressos', ingressoSchema);
module.exports = Ingresso;