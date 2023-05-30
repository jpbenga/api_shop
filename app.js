const express = require('express');
const app = express();
const port = 3000;
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('api_shop', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});

// Vérifier la connexion à la base de données
sequelize
    .authenticate()
    .then(() => {

        // Importer les routes
        const userRoutes = require('./routes/userRoutes');
        const tagRoutes = require('./routes/tagRoutes');
        const promotionRoutes = require('./routes/promotionRoutes');
        const productRoutes = require('./routes/productRoutes');

        // Utiliser les routes
        app.use('/users', userRoutes);
        app.use('/tags', tagRoutes);
        app.use('/promotions', promotionRoutes);
        app.use('/products', productRoutes);

        // Route principale
        app.get('/', (req, res) => {
            res.send('Bienvenue sur votre serveur !');
        });

        // Démarrage du serveur
        app.listen(port, () => {
            console.log(`Serveur démarré sur le port ${port}`);
        });

        console.log('Connexion à la base de données réussie.');
    })
    .catch((error) => {
        console.error('Erreur lors de la connexion à la base de données:', error);
    });
