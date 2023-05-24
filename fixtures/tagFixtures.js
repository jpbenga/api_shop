const faker = require('faker');
const { Tag } = require('../models');

const generateFakeTags = async (count) => {
    const tags = [];
    const tagNames = ['sport', 'tech', 'social', 'angular', 'symfony', 'java', 'apple', 'samsung'];

    for (let i = 0; i < count; i++) {
        const tagName = faker.random.arrayElement(tagNames);
        const tag = {
            name: tagName,
        };
        tags.push(tag);
    }

    try {
        await Tag.bulkCreate(tags);
    } catch (error) {
        console.error('Erreur lors de la création des tags fictifs :', error);
    }
};

module.exports = {
    generateFakeTags,
};
