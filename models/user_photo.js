'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_photo extends Model {
    static associate(models) {
      User_photo.belongsTo(models.ProplyUser, {
        foreignKey: 'user_id',
        as: 'user'
      });
    }
  }
  User_photo.init({
    id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    photo: DataTypes.BLOB('long')
  }, {
    sequelize,
    modelName: 'User_photo',
  });
  return User_photo;
};
