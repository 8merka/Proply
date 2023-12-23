'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Object_photo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      photo: {
        type: Sequelize.ARRAY(Sequelize.BLOB("long"))
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Object_photo');
  }
};