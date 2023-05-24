const faker = require('faker');
const { Tag_Product, Tag, Product } = require('../models');

const generateFakeTagProducts = async (count) => {
    const tagProducts = [];

    // Récupérer tous les tags et produits existants
    const tags = await Tag.findAll();
    const products = await Product.findAll();

    if (tags.length === 0 || products.length === 0) {
        console.error('Impossible de générer des fausses données pour la table "tag_product". Aucun tag ou produit existant.');
        return;
    }

    for (let i = 0; i < count; i++) {
        const randomTag = faker.random.arrayElement(tags);
        const randomProduct = faker.random.arrayElement(products);

        const tagProduct = {
            tag_id: randomTag.id,
            product_id: randomProduct.id,
        };

        tagProducts.push(tagProduct);
    }

    try {
        await Tag_Product.bulkCreate(tagProducts);
        console.log('Fausses données pour la table "tag_product" générées avec succès !');
    } catch (error) {
        console.error('Erreur lors de la création des fausses données pour la table "tag_product" :', error);
    }
};

module.exports = {
    generateFakeTagProducts,
};
