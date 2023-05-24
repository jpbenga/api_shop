const faker = require('faker');
const { Product } = require('../models');

const generateFakeProducts = async (count) => {
    const products = [];
    for (let i = 0; i < count; i++) {
        const product = {
            title: faker.commerce.productName(),
            description: faker.lorem.paragraph(),
            price: parseFloat(faker.commerce.price(10, 1000)).toFixed(2),
            enable: faker.random.boolean()
        };
        products.push(product);
    }
    try {
        await Product.bulkCreate(products);
    } catch (error) {
        console.error('Erreur lors de la création des produits fictifs :', error);
    }
};

module.exports = {
    generateFakeProducts
};

