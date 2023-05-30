const faker = require('faker');
const { User } = require('../models');

const generateFakeUsers = async (count) => {
    const users = [];
    for (let i = 0; i < count; i++) {
        const user = {
            lastName: faker.name.lastName(),
            firstName: faker.name.firstName(),
            age: faker.random.number({ min: 18, max: 60 }),
            email: faker.internet.email(),
            password: faker.internet.password()
        };
        users.push(user);
    }
    try {
        await User.bulkCreate(users);
    } catch (error) {
        console.error('Erreur lors de la création des utilisateurs fictifs :', error);
    }
};

module.exports = {
    generateFakeUsers
};


