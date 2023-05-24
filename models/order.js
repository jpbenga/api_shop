'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: 'user_id'
      });

    }
  }
  Order.init({
    tva: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    status: DataTypes.ENUM('0', '1', '2')
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};