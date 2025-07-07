const express = require('express');
const router = express.Router();

let products = [
 {
      "id": "1",
      "name": "Pipoca Grande",
      "description": "Pipoca grande, perfeita para dividir.",
      "price": 19.99,
      "image": "https://images.pexels.com/photos/5112444/pexels-photo-5112444.jpeg"
    },
    {
      "id": "2",
      "name": "Refrigerante 500ml",
      "description": "Refrigerante gelado para acompanhar seu filme.",
      "price": 8.49,
      "image": "https://images.pexels.com/photos/5332073/pexels-photo-5332073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "id": "3",
      "name": "Combo Nachos",
      "description": "Nachos crocantes com molho especial.",
      "price": 13.99,
      "image": "https://images.pexels.com/photos/4960237/pexels-photo-4960237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
];

// GET /products
router.get('/', (req, res) => {
  res.json(products);
});

// POST /products
router.post('/', (req, res) => {
  const newProduct = req.body;
  newProduct.id = String(Date.now());
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /products/:id
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const index = products.findIndex(p => p.id == id);

  if (index !== -1) {
    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).json({ error: 'Produto não encontrado' });
  }
});

// DELETE /products/:id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = products.findIndex(p => p.id == id);

  if (index !== -1) {
    products.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Produto não encontrado' });
  }
});

module.exports = router;
