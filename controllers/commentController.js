const { Comment } = require('../models');

const commentController = {
    getAllComments: async (req, res) => {
        try {
            const comments = await Comment.findAll();
            return res.json(comments);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des commentaires :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des commentaires.' });
        }
    },

    createComment: async (req, res) => {
        try {
            const newComment = await Comment.create(req.body);
            res.status(201).json(newComment);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création du commentaire :', error);
            res.status(500).json({ message: 'Erreur lors de la création du commentaire.' });
        }
    },

    getCommentById: async (req, res) => {
        try {
            const comment = await Comment.findByPk(req.params.id);
            if (comment) {
                res.json(comment);
            } else {
                res.status(404).json({ message: 'Commentaire introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération du commentaire :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération du commentaire.' });
        }
    },

    updateComment: async (req, res) => {
        try {
            const comment = await Comment.findByPk(req.params.id);
            if (comment) {
                await comment.update(req.body);
                res.json(comment);
            } else {
                res.status(404).json({ message: 'Commentaire introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la mise à jour du commentaire :', error);
            res.status(500).json({ message: 'Erreur lors de la mise à jour du commentaire.' });
        }
    },

    deleteComment: async (req, res) => {
        try {
            const comment = await Comment.findByPk(req.params.id);
            if (comment) {
                await comment.destroy();
                res.json({ message: 'Commentaire supprimé avec succès.' });
            } else {
                res.status(404).json({ message: 'Commentaire introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la suppression du commentaire :', error);
            res.status(500).json({ message: 'Erreur lors de la suppression du commentaire.' });
        }
    }
};

module.exports = commentController;
