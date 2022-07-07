'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('books', 
    [
      { 
        title: 'As Crônicas de Nárnia',
        author: 'C. S Lewis',
        page_quantity: '345',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      { 
        title: 'Eu, Robô',
        author: 'Issac Asimoviv',
        page_quantity: '253',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ]
  ),

  async down (queryInterface, Sequelize) {

  }
};
