const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Func = require('./models/funcs');

async function criarUsuarios() {
  await mongoose.connect('mongodb://localhost:27017/cinema_db');

  const hashed = await bcrypt.hash('123456', 10);
  await Func.create({ username: 'admin', password: hashed, role: 'gerente' });
  await Func.create({ username: 'funcionario', password: hashed, role: 'funcionario' });

  console.log('Usuários criados com sucesso!');
  mongoose.connection.close();
}

criarUsuarios();
