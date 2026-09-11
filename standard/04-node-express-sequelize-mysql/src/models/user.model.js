const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // 👈 Aponta para a nova configuração sênior

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true }
}, {
  tableName: 'users'
});

module.exports = User;
