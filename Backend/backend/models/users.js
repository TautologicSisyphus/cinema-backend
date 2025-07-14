const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({ // Auto-generated ObjectId  
  nome: { type: String, required: true },  
  cpf: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  nascimento: { type: String, required: true },
});

var User = mongoose.model('users', userSchema);
module.exports = User;