'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag_Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Tag, { foreignKey: 'tag_id' });
      this.belongsTo(models.Product, { foreignKey: 'product_id' });
    }
  }
  Tag_Product.init({
    tag_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tag_Product',
  });
  return Tag_Product;
};