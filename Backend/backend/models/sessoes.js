const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessaoSchema = new Schema({ // Auto-generated ObjectId  
  id: { type: Number, required: true, unique: true },  
  filme: { type: String, required: true },
  horario: { type: String, required: true }
});

var Sessao = mongoose.model('sessoes', sessaoSchema);
module.exports = Sessao;