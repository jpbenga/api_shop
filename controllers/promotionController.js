const { Promotion } = require('../models');

const promotionController = {
    getAllPromotions: async (req, res) => {
        try {
            const promotions = await Promotion.findAll();
            return res.json(promotions);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des promotions :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des promotions.' });
        }
    },

    createPromotion: async (req, res) => {
        try {
            const newPromotion = await Promotion.create(req.body);
            res.status(201).json(newPromotion);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création de la promotion :', error);
            res.status(500).json({ message: 'Erreur lors de la création de la promotion.' });
        }
    },

    getPromotionById: async (req, res) => {
        try {
            const promotion = await Promotion.findByPk(req.params.id);
            if (promotion) {
                res.json(promotion);
            } else {
                res.status(404).json({ message: 'Promotion introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération de la promotion :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération de la promotion.' });
        }
    },

    updatePromotion: async (req, res) => {
        try {
            const promotion = await Promotion.findByPk(req.params.id);
            if (promotion) {
                await promotion.update(req.body);
                res.json(promotion);
            } else {
                res.status(404).json({ message: 'Promotion introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la mise à jour de la promotion :', error);
            res.status(500).json({ message: 'Erreur lors de la mise à jour de la promotion.' });
        }
    },

    deletePromotion: async (req, res) => {
        try {
            const promotion = await Promotion.findByPk(req.params.id);
            if (promotion) {
                await promotion.destroy();
                res.json({ message: 'Promotion supprimée avec succès.' });
            } else {
                res.status(404).json({ message: 'Promotion introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la suppression de la promotion :', error);
            res.status(500).json({ message: 'Erreur lors de la suppression de la promotion.' });
        }
    }
};

module.exports = promotionController;
