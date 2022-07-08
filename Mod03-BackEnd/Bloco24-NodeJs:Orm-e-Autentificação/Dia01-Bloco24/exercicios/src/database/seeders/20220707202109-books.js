'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('books', 
    [
      { 
        title: 'As Crônicas de Nárnia',
        author: 'C. S. Lewis',
        page_quantity: '345',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        publisher: 'Martins Fontes'
      },
      { 
        title: 'Eu, Robô',
        author: 'Issac Asimoviv',
        page_quantity: '253',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        publisher: 'Pocket Ouro'
      },
      { 
        title: 'Cristianismo Puro e simples',
        author: 'C. S. Lewis',
        page_quantity: '249',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        publisher: 'Thomas Nelson Brasil'
      },
    ]
  ),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('books', null, {})
};
