const faker = require('faker');
const { Product_Promotion, Product, Promotion } = require('../models');

const generateFakeProductPromotions = async (count) => {
    const productPromotions = [];

    // Récupérer tous les produits et promotions existantes
    const products = await Product.findAll();
    const promotions = await Promotion.findAll();

    if (products.length === 0 || promotions.length === 0) {
        console.error('Impossible de générer des fausses données pour la table "product_promotion". Aucun produit ou promotion existant.');
        return;
    }

    for (let i = 0; i < count; i++) {
        const randomProduct = faker.random.arrayElement(products);
        const randomPromotion = faker.random.arrayElement(promotions);

        const productPromotion = {
            product_id: randomProduct.id,
            promotion_id: randomPromotion.id,
        };

        productPromotions.push(productPromotion);
    }

    try {
        await Product_Promotion.bulkCreate(productPromotions);
        console.log('Fausses données pour la table "product_promotion" générées avec succès !');
    } catch (error) {
        console.error('Erreur lors de la création des fausses données pour la table "product_promotion" :', error);
    }
};

module.exports = {
    generateFakeProductPromotions,
};
