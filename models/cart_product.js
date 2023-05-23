'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart_Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      cart_product.belongsTo(models.cart, { foreignKey: 'cart_id' });
      cart_product.belongsTo(models.product, { foreignKey: 'product_id' });
    }
  }
  Cart_Product.init({
    cart_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart_Product',
  });
  return Cart_Product;
};