const express = require('express');
const router = express.Router();
const tagProductController = require('../controllers/tagProductController');

// GET /tag-products
router.get('/', tagProductController.getAllTagProducts);

// POST /tag-products
router.post('/', tagProductController.createTagProduct);

// GET /tag-products/:id
router.get('/:id', tagProductController.getTagProductById);

// PUT /tag-products/:id
router.put('/:id', tagProductController.updateTagProduct);

// DELETE /tag-products/:id
router.delete('/:id', tagProductController.deleteTagProduct);

module.exports = router;
