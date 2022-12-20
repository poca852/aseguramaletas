const { DataTypes } = require('sequelize');
const sequelize = require('../db/config');

const UserModel = sequelize.define('user', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },

  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },

  fullName: {
    type: DataTypes.STRING,
    allowNull: false
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },

  img: {
    type: DataTypes.STRING
  },

  password: {
    type: DataTypes.STRING
  },

  address: {
    type: DataTypes.STRING,
    allowNull: false
  },

  rol: {
    type: DataTypes.ENUM,
    values: ['admin', 'user', 'super_admin'],
    defaultValue: 'user'
  },

  nit: {
    type: DataTypes.STRING
  },

  country: {
    type: DataTypes.STRING
  },

  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },

  google: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },

  passport: {
    type: DataTypes.STRING
  },

}, {timestamps: false});

module.exports = UserModel;