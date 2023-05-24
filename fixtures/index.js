// index.js

const { Sequelize } = require('sequelize');
const config = require('../config/config.json')[process.env.NODE_ENV || 'development'];
const db = require('../models');

// Importez ici les fichiers de génération de fausses données pour chaque entité
const userFixtures = require('./userFixtures');
const productFixtures = require('./productFixtures');
const promotionFixtures = require('./promotionFixtures');
const tagFixtures = require('./tagFixtures');
const commentFixtures = require('./commentFixtures');
const cartFixtures = require('./cartFixtures');
const orderFixtures = require('./orderFixtures');
const cart_productFixtures = require('./cart_productFixtures');
const product_promotionFixtures = require('./product_promotionFixtures');
const tag_productFixtures = require('./tag_productFixtures');
// Importez les autres fichiers de génération de fausses données pour d'autres entités si nécessaire

const seedDatabase = async () => {
    try {
        const sequelize = new Sequelize(config.database, config.username, config.password, config);

        await sequelize.sync({ force: true });
        console.log('Base de données synchronisée.');

        // Appelez les fonctions de génération de fausses données pour chaque entité
        await userFixtures.generateFakeUsers(10);
        await productFixtures.generateFakeProducts(20);
        await promotionFixtures.generateFakePromotions(10);
        await tagFixtures.generateFakeTags(8);
        await commentFixtures.generateFakeComments(50);
        await cartFixtures.generateFakeCarts(30);
        await orderFixtures.generateFakeOrders(20);
        await cart_productFixtures.generateFakeCartProducts(10);
        await product_promotionFixtures.generateFakeProductPromotions(20);
        await tag_productFixtures.generateFakeTagProducts(10);
        // Appelez les autres fonctions de génération de fausses données pour d'autres entités si nécessaire

        console.log('Données de test insérées avec succès.');

        await sequelize.close();
        console.log('Connexion à la base de données fermée.');
    } catch (error) {
        console.error('Une erreur s\'est produite lors de la génération des données de test :', error);
    }
};

seedDatabase();
