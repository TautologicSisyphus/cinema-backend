const express = require('express');
const router = express.Router();
const Produto = require('../models/produtos'); // Importa o modelo de Sessão

// GET /products
router.get('/', (req, res) => {
  Produto.find({})
    .then(produtos => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(produtos);
      console.log('Produtos encontrados:', produtos);
    })
    .catch(err => {
      console.error('Erro ao buscar produtos:', err);
      res.status(500).json({ error: err.message });
    });
});

// POST /products
router.post('/', (req, res) => {
  Produto.create(req.body)
    .then(produto => {
      res.status(201).json(produto);
      console.log('Produto criado:', produto);
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
});

// PUT /products/:id
router.put('/:id', (req, res) => {
  const id = req.params.id;

  Produto.findOneAndUpdate(
    { id: id },
    req.body,
    { new: true, runValidators: true }
  )
    .then(produto => {
      if (produto) {
        res.json(produto);
        console.log('Produto atualizado:', produto);
      } else {
        res.status(404).json({ error: 'Produto não encontrado' });
      }
    })
    .catch(err => {
      res.status(400).json({ error: err.message });
    });
});

// DELETE /products/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Produto.findOneAndDelete({ id: id })
    .then(produto => {
      if (produto) {
        res.status(204).send();
        console.log('Produto removido:', produto);
      } else {
        res.status(404).json({ error: 'Produto não encontrado' });
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;

