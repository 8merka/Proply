'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Object_state extends Model {
    static associate(models) {
      Object_state.hasMany(models.Reale_estate_object, {
        foreignKey: 'state',
        as: 'objects'
      });
    }
  }
  Object_state.init({
    id: DataTypes.INTEGER,
    state_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Object_state',
  });
  return Object_state;
};
