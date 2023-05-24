'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Tag, {
        through: 'tag_product',
        foreignKey: 'product_id'
      });
      this.belongsToMany(models.Promotion, {
        through: 'product_promotion',
        foreignKey: 'product_id'
      });
      this.belongsToMany(models.Cart, {
        through: 'cart_product',
        foreignKey: 'product_id'
      });
      this.hasMany(models.Comment, {
        foreignKey: 'product_id',
      });
    }
  }
  Product.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    enable: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};