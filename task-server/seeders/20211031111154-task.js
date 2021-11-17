'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', [
      {
        key: 'jndjke',
        content: 'seed 1',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      },
      {
        key: 'cmeic',
        content: 'seed 2',
        createdAt: new Date().toDateString(),
        updatedAt: new Date().toDateString()
      }
  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Tasks', null, {});
  }
};
