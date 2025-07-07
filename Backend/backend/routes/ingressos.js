const express = require('express');
const router = express.Router();

let ingressos = [
 {
      "id": "1",
      "name": "Inteira",
      "price": 20
    },
    {
      "id": "2",
      "name": "Meia",
      "price": 10
    },
    {
      "id": "3",
      "name": "VIP",
      "price": 30
    },
    {
      "id": "4",
      "name": "Dobradinha",
      "price": 30.99
    }
];

// GET /ingressos
router.get('/', (req, res) => {
  res.json(ingressos);
});

// POST /ingressos
router.post('/', (req, res) => {
  const newIngresso = req.body;
  newIngresso.id = String(Date.now());
  ingressos.push(newIngresso);
  res.status(201).json(newIngresso);
});

// PUT /ingressos/:id
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const index = ingressos.findIndex(ing => ing.id == id); 

  if (index !== -1) {
    ingressos[index] = { ...ingressos[index], ...req.body };
    res.json(ingressos[index]);
  } else {
    res.status(404).json({ error: 'Ingresso não encontrado' });
  }
});

// DELETE /ingressos/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = ingressos.findIndex(ing => ing.id == id);

  if (index !== -1) {
    ingressos.splice(index, 1);
    res.status(204).send(); // sucesso sem corpo
  } else {
    res.status(404).json({ error: 'Ingresso não encontrado' });
  }
});

module.exports = router;
