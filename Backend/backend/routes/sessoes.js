const express = require('express');
const router = express.Router();

let sessoes = [
 {
      "id": "1",
      "filme": "John Wick",
      "horario": "20:00"
    },
    {
      "id": "2",
      "filme": "Ad Astra",
      "horario": "21:00"
    },
    {
      "id": "3",
      "filme": "Gravity",
      "horario": "20:30"
    },
    {
      "id": "4",
      "name": "",
      "price": null,
      "filme": "Toy story",
      "horario": "23.00"
    }
];

// GET /sessoes
router.get('/', (req, res) => {
  res.json(sessoes);
});

// POST /sessoes
router.post('/', (req, res) => {
  const newSessao = req.body;
  newSessao.id = Date.now();
  sessoes.push(newSessao);
  res.status(201).json(newSessao);
});

module.exports = router;
