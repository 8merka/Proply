'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Object_type extends Model {
    static associate(models) {
      Object_type.hasMany(models.Reale_estate_object, {
        foreignKey: 'type_id',
        as: 'objects'
      });
    }
  }
  Object_type.init({
    id: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Object_type',
  });
  return Object_type;
};
