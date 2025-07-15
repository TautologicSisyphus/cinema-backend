const express = require('express');
const router = express.Router();
const Ingresso = require('../models/ingressos'); // Importa o modelo de Ingresso
const passport = require('passport');

// GET /ingressos
router.get('/', (req, res) => {
  Ingresso.find({})
    .then(ingressos => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(ingressos);
      console.log('Ingressos encontrados:', ingressos);
    })
    .catch(err => {
      console.error('Erro ao buscar ingressos:', err);
      res.status(500).json({ error: err.message });
    });
});

// POST /ingressos
router.post('/', (req, res) => {
  Ingresso.create(req.body)
    .then(ingresso => {
      res.status(201).json(ingresso);
      console.log('Ingresso criado:', ingresso);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
});

// PUT /ingressos/:id
router.put('/:id', (req, res) => {
  const id = req.params.id;

  Ingresso.findOneAndUpdate(
    { id: id },
    req.body,
    { new: true, runValidators: true }
  )
    .then(ingresso => {
      if (ingresso) {
        res.json(ingresso);
        console.log('Ingresso atualizado:', ingresso);
      } else {
        res.status(404).json({ error: 'Ingresso não encontrado' });
      }
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
});

// DELETE /ingressos/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Ingresso.findOneAndDelete({ id: id })
    .then(ingresso => {
      if (ingresso) {
        res.status(204).send();
        console.log('Ingresso removido:', ingresso);
      } else {
        res.status(404).json({ error: 'Ingresso não encontrado' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
