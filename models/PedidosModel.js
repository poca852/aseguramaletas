const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');
const UserModel = require('./UserModel');

const PedidoModel = sequelize.define('pedido', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },

  isPending: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },

  date: {
    type: DataTypes.DATE,
    defaultValue: new Date()
  },

  value: {
    type: DataTypes.FLOAT
  },

  clientId: {
    type: DataTypes.UUID,
    references: {
      model: UserModel,
      key: 'id'
    }
  },

  products: {
    
  }

}, {timestamps: false});

module.exports = PedidoModel;