'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Balance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Balance.belongsTo(models.User, {foreignKey: 'account_id', as: 'user'})
    }
  };
  Balance.init({
    account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Account id is required'
        },
        notEmpty: {
          msg: 'Account id is required'
        }
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Balance amount is required'
        },
        notEmpty: {
          msg: 'Balance amount is required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Balance',
  });
  return Balance;
};