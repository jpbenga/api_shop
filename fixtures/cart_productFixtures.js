const faker = require('faker');
const { Cart_Product, Cart, Product } = require('../models');

const generateFakeCartProducts = async (count) => {
    const cart_Products = [];

    // Récupérer tous les paniers et produits existants
    const carts = await Cart.findAll();
    const products = await Product.findAll();

    if (carts.length === 0 || products.length === 0) {
        console.error('Impossible de générer des fausses données pour la table "cart_product". Aucun panier ou produit existant.');
        return;
    }

    for (let i = 0; i < count; i++) {
        const randomCart = faker.random.arrayElement(carts);
        const randomProduct = faker.random.arrayElement(products);

        const cart_Product = {
            cart_id: randomCart.id,
            product_id: randomProduct.id,
        };

        cart_Products.push(cart_Product);
    }

    try {
        await Cart_Product.bulkCreate(cart_Products);
        console.log('Fausses données pour la table "cart_product" générées avec succès !');
    } catch (error) {
        console.error('Erreur lors de la création des fausses données pour la table "cart_product" :', error);
    }
};

module.exports = {
    generateFakeCartProducts,
};
