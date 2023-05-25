'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Promotion extends Model {
    static associate(models) {
      // define association here
      this.belongsToMany(models.Product, {
        through: 'product_promotion',
        foreignKey: 'promotion_id'
      });
    }
  }

  Promotion.init(
    {
      rate: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      enable: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {
      sequelize,
      freezeTableName: true,
      tableName: 'promotions'
    }
  );

  return Promotion;
};
