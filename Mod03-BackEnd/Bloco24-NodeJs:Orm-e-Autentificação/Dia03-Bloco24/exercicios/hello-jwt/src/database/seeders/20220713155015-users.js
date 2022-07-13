'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
  [
    {
      email: 'leonardo@hotmail.com',
      password: '999999999',
      username: 'Léo',
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      email: 'paula@hotmail.com',
      password: '999999999',
      username: 'paula',
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      email: 'Pedro@hotmail.com',
      password: '546a5s4df',
      username: 'Pedro',
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      email: 'leonardo@hotmail.com',
      password: '999999999',
      username: 'Léo',
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      email: 'marcos@hotmail.com',
      password: '9#$%SADFG#$',
      username: 'Marcos',
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};