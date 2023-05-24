'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product_Promotion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product, { foreignKey: 'product_id' });
      this.belongsTo(models.Promotion, { foreignKey: 'promotion_id' });
    }
  }
  Product_Promotion.init({
    product_id: DataTypes.INTEGER,
    promotion_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product_Promotion',
  });
  return Product_Promotion;
};