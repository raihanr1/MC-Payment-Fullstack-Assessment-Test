'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transaction.belongsTo(models.User, {foreignKey: 'account_id', as: 'user'})
    }
  };
  Transaction.init({
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
    history: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'History is required'
        },
        notEmpty: {
          msg: 'History is required'
        }
      }
    },
    status: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    income: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};