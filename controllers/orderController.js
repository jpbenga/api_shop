const { Order } = require('../models');

const orderController = {
    getAllOrders: async (req, res) => {
        try {
            const orders = await Order.findAll();
            return res.json(orders);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des commandes :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des commandes.' });
        }
    },

    createOrder: async (req, res) => {
        try {
            const newOrder = await Order.create(req.body);
            res.status(201).json(newOrder);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création de la commande :', error);
            res.status(500).json({ message: 'Erreur lors de la création de la commande.' });
        }
    },

    getOrderById: async (req, res) => {
        try {
            const order = await Order.findByPk(req.params.id);
            if (order) {
                res.json(order);
            } else {
                res.status(404).json({ message: 'Commande introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération de la commande :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération de la commande.' });
        }
    },

    updateOrder: async (req, res) => {
        try {
            const order = await Order.findByPk(req.params.id);
            if (order) {
                await order.update(req.body);
                res.json(order);
            } else {
                res.status(404).json({ message: 'Commande introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la mise à jour de la commande :', error);
            res.status(500).json({ message: 'Erreur lors de la mise à jour de la commande.' });
        }
    },

    deleteOrder: async (req, res) => {
        try {
            const order = await Order.findByPk(req.params.id);
            if (order) {
                await order.destroy();
                res.json({ message: 'Commande supprimée avec succès.' });
            } else {
                res.status(404).json({ message: 'Commande introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la suppression de la commande :', error);
            res.status(500).json({ message: 'Erreur lors de la suppression de la commande.' });
        }
    }
};

module.exports = orderController;
