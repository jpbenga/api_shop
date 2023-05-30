const express = require('express');
const router = express.Router();
const productPromotionController = require('../controllers/productPromotionController');

// GET /product-promotions
router.get('/', productPromotionController.getAllProductPromotions);

// POST /product-promotions
router.post('/', productPromotionController.createProductPromotion);

// GET /product-promotions/:id
router.get('/:id', productPromotionController.getProductPromotionById);

// PUT /product-promotions/:id
router.put('/:id', productPromotionController.updateProductPromotion);

// DELETE /product-promotions/:id
router.delete('/:id', productPromotionController.deleteProductPromotion);

module.exports = router;
