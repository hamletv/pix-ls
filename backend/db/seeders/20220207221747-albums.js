'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Albums', [
      {
        userId: 1,
        title: 'Nature Album'
      },
      {
        userId: 1,
        title: 'Home Album'
      },
      {
        userId: 2,
        title: 'Eating, food and drinks'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Albums', null, {});
  }
};
