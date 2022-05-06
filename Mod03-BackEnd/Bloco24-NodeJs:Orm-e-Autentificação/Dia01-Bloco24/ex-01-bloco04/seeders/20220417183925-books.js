module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Os Robôs da Alvorada',
        author: 'Issac Asimov',
        page_quantity: 560,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'Fundação e Terra',
        author: 'Issac Asimov',
        page_quantity: 574,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        title: 'A Máquina do Tempo',
        author: 'H. G. Welles',
        page_quantity: 176,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Books', null, {})
  },
};