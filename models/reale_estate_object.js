'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reale_estate_object extends Model {
    static associate(models) {
      Reale_estate_object.belongsTo(models.ProplyUser, {
        foreignKey: 'seller_id',
        as: 'seller'
      });
      Reale_estate_object.belongsTo(models.Consultant, {
        foreignKey: 'consultant_id',
        as: 'consultant'
      });
      Reale_estate_object.belongsTo(models.Object_state, {
        foreignKey: 'state',
        as: 'state'
      });
      Reale_estate_object.belongsTo(models.Object_type, {
        foreignKey: 'type_id',
        as: 'type'
      });
      Reale_estate_object.belongsTo(models.Object_photo, {
        foreignKey: 'photo_id',
        as: 'photos'
      });
    }
  }
  Reale_estate_object.init({
    id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    type_id: DataTypes.INTEGER,
    addres: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    bathrooms_number: DataTypes.INTEGER,
    car_space: DataTypes.INTEGER,
    bedrooms_number: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    state: DataTypes.INTEGER,
    consultant_id: DataTypes.INTEGER,
    photo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reale_estate_object',
  });
  return Reale_estate_object;
};
