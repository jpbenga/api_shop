const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// GET /carts
router.get('/', cartController.getAllCarts);

// POST /carts
router.post('/', cartController.createCart);

// GET /carts/:id
router.get('/:id', cartController.getCartById);

// PUT /carts/:id
router.put('/:id', cartController.updateCart);

// DELETE /carts/:id
router.delete('/:id', cartController.deleteCart);

module.exports = router;
