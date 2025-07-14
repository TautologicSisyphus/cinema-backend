var express = require('express');
var router = express.Router();
var User = require('../models/users'); // Importa o modelo de Usuário

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({})
    .then(users => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(users);
      console.log('Usuários encontrados:', users);
    })
    .catch(err => {
      console.error('Erro ao buscar usuários:', err);
      res.status(500).json({ error: err.message });
    });
});

/* POST users */
router.post('/', function(req, res, next) {
  User.create(req.body)
    .then(user => {
      res.status(201).json(user);
      console.log('Usuário criado:', user);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
});

/* PUT users/:id */
router.put('/:id', function(req, res, next) {
  const id = req.params.id;

  User.findOneAndUpdate(
    { _id: id },
    req.body,
    { new: true, runValidators: true }
  )
    .then(user => {
      if (user) {
        res.json(user);
        console.log('Usuário atualizado:', user);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
});

/* DELETE users/:id */
router.delete('/:id', function(req, res, next) {
  const id = req.params.id;

  User.findOneAndDelete({ _id: id })
    .then(user => {
      if (user) {
        res.status(204).send();
        console.log('Usuário removido:', user);
      } else {
        res.status(404).json({ error: 'Usuário não encontrado' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;


module.exports = router;
