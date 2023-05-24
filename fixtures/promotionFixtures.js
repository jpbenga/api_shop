const faker = require('faker');
const { Promotion } = require('../models');

const generateFakePromotions = async (count) => {
    const promotions = [];
    const rates = [5.5, 20];
    const titles = ['summer', 'autumn', 'spring', 'winter'];

    for (let i = 0; i < count; i++) {
        const promotion = {
            rate: faker.random.arrayElement(rates),
            title: faker.random.arrayElement(titles),
            enable: faker.random.boolean(),
        };
        promotions.push(promotion);
    }

    try {
        await Promotion.bulkCreate(promotions);
    } catch (error) {
        console.error('Erreur lors de la création des promotions fictives :', error);
    }
};

module.exports = {
    generateFakePromotions,
};