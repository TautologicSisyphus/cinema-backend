const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Func = require('./models/funcs');

router.post('/register', async (req, res) => {
   try {
    const { username, password } = req.body;

    // procurar usuário no banco
    const user = await Func.findOne({ username: username });
    if (!user) {
      return res.status(400).json({ msg: 'Usuário não encontrado' });
    }

    // comparar senha
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Senha incorreta' });
    }

    // gerar token JWT
    const payload = { id: user.id, role: user.role };
    const token = jwt.sign(payload, 'chave_secreta_super_segura', { expiresIn: '1h' });

    res.json({ token: `Bearer ${token}`, role: user.role });
  } catch (err) {
    console.error('Erro no login:', err);
    res.status(500).json({ msg: 'Erro ao fazer login.' });
  }
});

module.exports = router;
