const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');

// GET /promotions
router.get('/', promotionController.getAllPromotions);

// POST /promotions
router.post('/', promotionController.createPromotion);

// GET /promotions/:id
router.get('/:id', promotionController.getPromotionById);

// PUT /promotions/:id
router.put('/:id', promotionController.updatePromotion);

// DELETE /promotions/:id
router.delete('/:id', promotionController.deletePromotion);

module.exports = router;
