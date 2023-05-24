const faker = require('faker');
const { Cart, User, Product } = require('../models');

const generateFakeCarts = async (count) => {
    const carts = [];

    // Récupérer tous les utilisateurs existants
    const users = await User.findAll();

    // Récupérer le nombre total de produits existants
    const productCount = await Product.count();

    if (users.length === 0 || productCount === 0) {
        console.error('Impossible de générer des paniers fictifs. Aucun utilisateur ou produit existant.');
        return;
    }

    for (let i = 0; i < count; i++) {
        const randomUser = faker.random.arrayElement(users);
        const randomProductId = faker.random.number({ min: 1, max: productCount });

        const cart = {
            user_id: randomUser.id,
            product_id: randomProductId,
            quantity: faker.random.number({ min: 1, max: 10 }),
        };
        carts.push(cart);
    }

    try {
        await Cart.bulkCreate(carts);
        console.log('Paniers fictifs générés avec succès !');
    } catch (error) {
        console.error('Erreur lors de la création des paniers fictifs :', error);
    }
};

module.exports = {
    generateFakeCarts,
};
