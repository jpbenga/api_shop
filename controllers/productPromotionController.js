const { Product_Promotion } = require('../models');

const productPromotionController = {
    getAllProductPromotions: async (req, res) => {
        try {
            const productPromotions = await Product_Promotion.findAll();
            return res.json(productPromotions);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des promotions de produits :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des promotions de produits.' });
        }
    },

    createProductPromotion: async (req, res) => {
        try {
            const newProductPromotion = await Product_Promotion.create(req.body);
            res.status(201).json(newProductPromotion);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création de la promotion de produit :', error);
            res.status(500).json({ message: 'Erreur lors de la création de la promotion de produit.' });
        }
    },

    getProductPromotionById: async (req, res) => {
        try {
            const productPromotion = await Product_Promotion.findByPk(req.params.id);
            if (productPromotion) {
                res.json(productPromotion);
            } else {
                res.status(404).json({ message: 'Promotion de produit introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération de la promotion de produit :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération de la promotion de produit.' });
        }
    },

    updateProductPromotion: async (req, res) => {
        try {
            const productPromotion = await Product_Promotion.findByPk(req.params.id);
            if (productPromotion) {
                await productPromotion.update(req.body);
                res.json(productPromotion);
            } else {
                res.status(404).json({ message: 'Promotion de produit introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la mise à jour de la promotion de produit :', error);
            res.status(500).json({ message: 'Erreur lors de la mise à jour de la promotion de produit.' });
        }
    },

    deleteProductPromotion: async (req, res) => {
        try {
            const productPromotion = await Product_Promotion.findByPk(req.params.id);
            if (productPromotion) {
                await productPromotion.destroy();
                res.json({ message: 'Promotion de produit supprimée avec succès.' });
            } else {
                res.status(404).json({ message: 'Promotion de produit introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la suppression de la promotion de produit :', error);
            res.status(500).json({ message: 'Erreur lors de la suppression de la promotion de produit.' });
        }
    }
};

module.exports = productPromotionController;
