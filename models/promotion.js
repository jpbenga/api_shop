'use strict';

module.exports = (sequelize, DataTypes) => {
  const Promotion = sequelize.define('Promotion', {
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
  }, {
    freezeTableName: true,
    tableName: 'promotions'
  });

  Promotion.associate = models => {
    Promotion.belongsToMany(models.Product, {
      through: 'product_promotion',
      foreignKey: 'promotion_id'
    });
  };

  return Promotion;
};
