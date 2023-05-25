const { Tag } = require('../models');

const tagController = {
    getAllTags: async (req, res) => {
        try {
            const tags = await Tag.findAll();
            return res.json(tags);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des tags :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des tags.' });
        }
    },

    createTag: async (req, res) => {
        try {
            const newTag = await Tag.create(req.body);
            res.status(201).json(newTag);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création du tag :', error);
            res.status(500).json({ message: 'Erreur lors de la création du tag.' });
        }
    },

    getTagById: async (req, res) => {
        try {
            const tag = await Tag.findByPk(req.params.id);
            if (tag) {
                res.json(tag);
            } else {
                res.status(404).json({ message: 'Tag introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération du tag :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération du tag.' });
        }
    },

    updateTag: async (req, res) => {
        try {
            const tag = await Tag.findByPk(req.params.id);
            if (tag) {
                await tag.update(req.body);
                res.json(tag);
            } else {
                res.status(404).json({ message: 'Tag introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la mise à jour du tag :', error);
            res.status(500).json({ message: 'Erreur lors de la mise à jour du tag.' });
        }
    },

    deleteTag: async (req, res) => {
        try {
            const tag = await Tag.findByPk(req.params.id);
            if (tag) {
                await tag.destroy();
                res.json({ message: 'Tag supprimé avec succès.' });
            } else {
                res.status(404).json({ message: 'Tag introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la suppression du tag :', error);
            res.status(500).json({ message: 'Erreur lors de la suppression du tag.' });
        }
    }
};

module.exports = tagController;
