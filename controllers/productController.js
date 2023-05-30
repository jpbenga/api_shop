const { Product } = require('../models');

const productController = {
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.findAll();
            return res.json(products);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des produits :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des produits.' });
        }
    },

    createProduct: async (req, res) => {
        try {
            const newProduct = await Product.create(req.body);
            res.status(201).json(newProduct);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création du produit :', error);
            res.status(500).json({ message: 'Erreur lors de la création du produit.' });
        }
    },

    getProductById: async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id);
            if (product) {
                res.json(product);
            } else {
                res.status(404).json({ message: 'Produit introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération du produit :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération du produit.' });
        }
    },

    updateProduct: async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id);
            if (product) {
                await product.update(req.body);
                res.json(product);
            } else {
                res.status(404).json({ message: 'Produit introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la mise à jour du produit :', error);
            res.status(500).json({ message: 'Erreur lors de la mise à jour du produit.' });
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id);
            if (product) {
                await product.destroy();
                res.json({ message: 'Produit supprimé avec succès.' });
            } else {
                res.status(404).json({ message: 'Produit introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la suppression du produit :', error);
            res.status(500).json({ message: 'Erreur lors de la suppression du produit.' });
        }
    }
};

module.exports = productController;
