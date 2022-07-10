'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Patient_surgeries', {
      patient_id: {
        type: sequelize.INTEGER,
        references: {
          model: 'Patients',
          key: 'patient_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      surgery_id: {
        type: sequelize.INTEGER,
        references: {
          model: 'Surgeries',
          key: 'surgery_id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Patient_surgeries');
  }
};