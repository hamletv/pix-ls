'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Comments', [
      {
        userId: 1,
        imageId: 1,
        comment: 'I love this photo, amazing detail!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        imageId: 2,
        comment: 'That\'s one lucky eagle...and one unlucky fish.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        imageId: 3,
        comment: 'Simply beautiful.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        imageId: 2,
        comment: 'It\'s 5 o\'clock somewhere!!! Drink on.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        imageId: 5,
        comment: 'I wish I could just pull that pizza out of the screen!.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        imageId: 6,
        comment: 'Fresh pasta is so time consuming but so worth it when you take that first bite...and the 20th bite too.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Comments', null, {});
  }
};
