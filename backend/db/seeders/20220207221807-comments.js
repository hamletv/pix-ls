'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        imageId: 1,
        comment: 'I love this photo, amazing detail!'
      },
      {
        userId: 1,
        imageId: 2,
        comment: 'That\'s one lucky eagle...and one unlucky fish.'
      },
      {
        userId: 1,
        imageId: 3,
        comment: 'Simply beautiful.'
      },
      {
        userId: 2,
        imageId: 2,
        comment: 'It\'s 5 o\'clock somewhere!!! Drink on.'
      },
      {
        userId: 2,
        imageId: 5,
        comment: 'I wish I could just pull that pizza out of the screen!.'
      },
      {
        userId: 2,
        imageId: 6,
        comment: 'Fresh pasta is so time consuming but so worth it when you take that first bite...and the 20th bite too.'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
