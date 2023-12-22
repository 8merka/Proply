'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProplyUser extends Model {
    static associate(models) {
      User.belongsTo(models.Role, {
        foreignKey: 'role',
        as: 'role'
      });
      User.hasMany(models.User_photo, {
        foreignKey: 'user_id',
        as: 'photos'
      });
      User.hasMany(models.Reale_estate_object,{
        foreignKey:'seller_id',
        as:'sellers'
      });
    }
  }
  User.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    city: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProplyUser',
  });
  return ProplyUser;
};
