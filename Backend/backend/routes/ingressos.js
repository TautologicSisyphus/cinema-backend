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
  newIngresso.id = Date.now();
  ingressos.push(newIngresso);
  res.status(201).json(newIngresso);
});

module.exports = router;
