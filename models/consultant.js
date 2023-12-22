'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consultant extends Model {
    static associate(models) {
      Consultant.hasMany(models.Reale_estate_object, {
        foreignKey: 'consultant_id',
        as: 'objects'
      });
    }
  }
  Consultant.init({
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Consultant',
  });
  return Consultant;
};
