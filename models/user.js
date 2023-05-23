'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order, {
        foreignKey: 'user_id'
      });
      this.hasMany(models.Comment, {
        foreignKey: 'user_id'
      });
      this.hasMany(models.Cart, {
        foreignKey: 'user_id'
      });
      this.hasMany(models.Product, {
        foreignKey: 'user_id'
      });
    }
  }
  User.init({
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};