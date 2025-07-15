const mongoose = require('mongoose');

const funcSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['funcionario', 'gerente'], required: true }
});

module.exports = mongoose.model('Func', funcSchema);
