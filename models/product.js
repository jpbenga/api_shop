const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

module.exports = (sequelize, Sequelize) => {

  const Product = sequelize.define('Product', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    enable: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },

  }, {
    freezeTableName: true,
    tableName: 'products'
  });

  Product.associate = models => {
    Product.belongsToMany(models.Tag, {
      through: 'tag_product',
      foreignKey: 'product_id'
    });
    Product.belongsToMany(models.Promotion, {
      through: 'product_promotion',
      foreignKey: 'product_id'
    });
    Product.belongsToMany(models.Cart, {
      through: 'cart_product',
      foreignKey: 'product_id'
    });
    Product.hasMany(models.Comment, {
      foreignKey: 'product_id'
    });
  };

  return Product;
};
