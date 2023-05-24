const faker = require('faker');
const { Order, User } = require('../models');

const generateFakeOrders = async (count) => {
    const orders = [];

    // Récupérer tous les utilisateurs existants
    const users = await User.findAll();

    for (let i = 0; i < count; i++) {
        const randomUser = faker.random.arrayElement(users);
        const status = faker.random.arrayElement(['0', '1', '2']);
        const order = {
            tva: '20',
            quantity: faker.random.number({ min: 1, max: 10 }),
            status: status,
            user_id: randomUser.id,
        };
        orders.push(order);
    }

    try {
        await Order.bulkCreate(orders);
        console.log('Commandes fictives générées avec succès !');
    } catch (error) {
        console.error('Erreur lors de la création des commandes fictives :', error);
    }
};

module.exports = {
    generateFakeOrders,
};
