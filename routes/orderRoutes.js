const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route pour récupérer toutes les commandes
router.get('/', orderController.getAllOrders);

// Route pour créer une nouvelle commande
router.post('/', orderController.createOrder);

// Route pour récupérer une commande par son ID
router.get('/:id', orderController.getOrderById);

// Route pour mettre à jour une commande
router.put('/:id', orderController.updateOrder);

// Route pour supprimer une commande
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
