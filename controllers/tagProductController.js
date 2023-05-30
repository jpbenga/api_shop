const { Tag_Product } = require('../models');

const tagProductController = {
    getAllTagProducts: async (req, res) => {
        try {
            const tagProducts = await Tag_Product.findAll();
            return res.json(tagProducts);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des produits associés au tag :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des produits associés au tag.' });
        }
    },

    createTagProduct: async (req, res) => {
        try {
            const newTagProduct = await Tag_Product.create(req.body);
            res.status(201).json(newTagProduct);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création du produit associé au tag :', error);
            res.status(500).json({ message: 'Erreur lors de la création du produit associé au tag.' });
        }
    },

    getTagProductById: async (req, res) => {
        try {
            const tagProduct = await Tag_Product.findByPk(req.params.id);
            if (tagProduct) {
                res.json(tagProduct);
            } else {
                res.status(404).json({ message: 'Produit associé au tag introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération du produit associé au tag :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération du produit associé au tag.' });
        }
    },

    updateTagProduct: async (req, res) => {
        try {
            const tagProduct = await Tag_Product.findByPk(req.params.id);
            if (tagProduct) {
                await tagProduct.update(req.body);
                res.json(tagProduct);
            } else {
                res.status(404).json({ message: 'Produit associé au tag introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la mise à jour du produit associé au tag :', error);
            res.status(500).json({ message: 'Erreur lors de la mise à jour du produit associé au tag.' });
        }
    },

    deleteTagProduct: async (req, res) => {
        try {
            const tagProduct = await Tag_Product.findByPk(req.params.id);
            if (tagProduct) {
                await tagProduct.destroy();
                res.json({ message: 'Produit associé au tag supprimé avec succès.' });
            } else {
                res.status(404).json({ message: 'Produit associé au tag introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la suppression du produit associé au tag :', error);
            res.status(500).json({ message: 'Erreur lors de la suppression du produit associé au tag.' });
        }
    }
};

module.exports = tagProductController;
