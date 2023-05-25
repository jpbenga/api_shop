const { User } = require('../models');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            return res.json(users);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération des utilisateurs :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs.' });
        }
    },

    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la création de l\'utilisateur :', error);
            res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur.' });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'Utilisateur introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la récupération de l\'utilisateur :', error);
            res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur.' });
        }
    },

    updateUser: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                await user.update(req.body);
                res.json(user);
            } else {
                res.status(404).json({ message: 'Utilisateur introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la mise à jour de l\'utilisateur :', error);
            res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur.' });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (user) {
                await user.destroy();
                res.json({ message: 'Utilisateur supprimé avec succès.' });
            } else {
                res.status(404).json({ message: 'Utilisateur introuvable.' });
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la suppression de l\'utilisateur :', error);
            res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur.' });
        }
    }
};

module.exports = userController;
