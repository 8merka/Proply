'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Reale_estate_object', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seller_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ProplyUser', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      type_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Object_type', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      addres: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.DECIMAL
      },
      bathrooms_number: {
        type: Sequelize.INTEGER
      },
      car_space: {
        type: Sequelize.INTEGER
      },
      bedrooms_number: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      state: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Object_state', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      consultant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Consultant', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      photo_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Object_photo', 
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Reale_estate_object');
  }
};
