const express = require('express');
const router = express.Router();
const Sessao = require('../models/sessoes'); // Importa o modelo de Sessão
const passport = require('passport');

// GET /sessoes
router.get('/', (req, res) => {
  Sessao.find({})
    .then(sessoes => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(sessoes);
      console.log('Sessões encontradas:', sessoes);
    })
    .catch(err => {
      console.error('Erro ao buscar sessões:', err);
      res.status(500).json({ error: err.message });
    });
});

// POST /sessoes
router.post('/', (req, res) => {
  Sessao.create(req.body)
    .then(sessao => {
      res.status(201).json(sessao);
      console.log('Sessão criada:', sessao);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
});

// PUT /sessoes/:id
router.put('/:id', (req, res) => {
  const id = req.params.id;
  
  Sessao.findOneAndUpdate(
    { id: id }, 
    req.body, 
    { new: true, runValidators: true }
  )
    .then(sessao => {
      if (sessao) {
        res.json(sessao);
        console.log('Sessão atualizada:', sessao);
      } else {
        res.status(404).json({ error: 'Sessão não encontrada' });
      }
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
});

// DELETE /sessoes/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  
  Sessao.findOneAndDelete({ id: id })
    .then(sessao => {
      if (sessao) {
        res.status(204).send();
        console.log('Sessão removida:', sessao);
      } else {
        res.status(404).json({ error: 'Sessão não encontrada' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
