const { Cart } = require('../models');

const cartController = {
    getAllCarts: async (req, res) => {
        try {
            const carts = await Cart.findAll();
            return res.json(carts);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des paniers :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des paniers.' });
        }
    },

    createCart: async (req, res) => {
        try {
            const newCart = await Cart.create(req.body);
            res.status(201).json(newCart);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création du panier :', error);
            res.status(500).json({ message: 'Erreur lors de la création du panier.' });
        }
    },

    getCartById: async (req, res) => {
        try {
            const cart = await Cart.findByPk(req.params.id);
            if (cart) {
                res.json(cart);
            } else {
                res.status(404).json({ message: 'Panier introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération du panier :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération du panier.' });
        }
    },

    updateCart: async (req, res) => {
        try {
            const cart = await Cart.findByPk(req.params.id);
            if (cart) {
                await cart.update(req.body);
                res.json(cart);
            } else {
                res.status(404).json({ message: 'Panier introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la mise à jour du panier :', error);
            res.status(500).json({ message: 'Erreur lors de la mise à jour du panier.' });
        }
    },

    deleteCart: async (req, res) => {
        try {
            const cart = await Cart.findByPk(req.params.id);
            if (cart) {
                await cart.destroy();
                res.json({ message: 'Panier supprimé avec succès.' });
            } else {
                res.status(404).json({ message: 'Panier introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la suppression du panier :', error);
            res.status(500).json({ message: 'Erreur lors de la suppression du panier.' });
        }
    }
};

module.exports = cartController;
