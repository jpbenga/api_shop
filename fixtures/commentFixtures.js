const faker = require('faker');
const { Comment, User, Product } = require('../models');

const generateFakeComments = async (count) => {
    const comments = [];

    // Récupérer tous les utilisateurs et produits existants
    const users = await User.findAll();
    const products = await Product.findAll();

    for (let i = 0; i < count; i++) {
        const randomUser = faker.random.arrayElement(users);
        const randomProduct = faker.random.arrayElement(products);

        const comment = {
            user_id: randomUser.id,
            product_id: randomProduct.id,
            readed: faker.random.boolean(),
            content: faker.lorem.paragraph(),
        };
        comments.push(comment);
    }

    try {
        await Comment.bulkCreate(comments);
    } catch (error) {
        console.error('Erreur lors de la création des commentaires fictifs :', error);
    }
};

module.exports = {
    generateFakeComments,
};
