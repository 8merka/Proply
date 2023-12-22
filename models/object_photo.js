'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Object_photo extends Model {
    static associate(models) {
      Object_photo.hasMany(models.Reale_estate_object, {
        foreignKey: 'photoid_id',
        as: 'objects'
      });
    }
  }
  Object_photo.init({
    id: DataTypes.INTEGER,
    photo: DataTypes.ARRAY(DataTypes.BLOB('long')),
  }, {
    sequelize,
    modelName: 'Object_photo',
  });
  return Object_photo;
};
