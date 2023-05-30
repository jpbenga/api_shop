const { Cart_Product } = require('../models');

const cartProductController = {
    getAllCartProducts: async (req, res) => {
        try {
            const cartProducts = await Cart_Product.findAll();
            return res.json(cartProducts);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des produits du panier :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des produits du panier.' });
        }
    },

    createCartProduct: async (req, res) => {
        try {
            const newCartProduct = await Cart_Product.create(req.body);
            res.status(201).json(newCartProduct);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création du produit du panier :', error);
            res.status(500).json({ message: 'Erreur lors de la création du produit du panier.' });
        }
    },

    getCartProductById: async (req, res) => {
        try {
            const cartProduct = await Cart_Product.findByPk(req.params.id);
            if (cartProduct) {
                res.json(cartProduct);
            } else {
                res.status(404).json({ message: 'Produit du panier introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération du produit du panier :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération du produit du panier.' });
        }
    },

    updateCartProduct: async (req, res) => {
        try {
            const cartProduct = await Cart_Product.findByPk(req.params.id);
            if (cartProduct) {
                await cartProduct.update(req.body);
                res.json(cartProduct);
            } else {
                res.status(404).json({ message: 'Produit du panier introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la mise à jour du produit du panier :', error);
            res.status(500).json({ message: 'Erreur lors de la mise à jour du produit du panier.' });
        }
    },

    deleteCartProduct: async (req, res) => {
        try {
            const cartProduct = await Cart_Product.findByPk(req.params.id);
            if (cartProduct) {
                await cartProduct.destroy();
                res.json({ message: 'Produit du panier supprimé avec succès.' });
            } else {
                res.status(404).json({ message: 'Produit du panier introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la suppression du produit du panier :', error);
            res.status(500).json({ message: 'Erreur lors de la suppression du produit du panier.' });
        }
    }
};

module.exports = cartProductController;
