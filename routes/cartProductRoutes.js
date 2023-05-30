const express = require('express');
const router = express.Router();
const cartProductController = require('../controllers/cartProductController');

// GET /cart-products
router.get('/', cartProductController.getAllCartProducts);

// POST /cart-products
router.post('/', cartProductController.createCartProduct);

// GET /cart-products/:id
router.get('/:id', cartProductController.getCartProductById);

// PUT /cart-products/:id
router.put('/:id', cartProductController.updateCartProduct);

// DELETE /cart-products/:id
router.delete('/:id', cartProductController.deleteCartProduct);

module.exports = router;
