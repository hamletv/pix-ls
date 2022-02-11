'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Images', [
        {
          userId: 1,
          albumId: null,
          imageUrl: 'https://images.unsplash.com/photo-1643509325029-ebe18f2f34c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          description: 'Ice Age',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          albumId: null,
          imageUrl: 'https://images.unsplash.com/photo-1643114673614-55af01ec8dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
          description: 'Catch of the day',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          albumId: null,
          imageUrl: 'https://images.unsplash.com/photo-1643620772691-e9d89e73a292?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
          description: 'Winter Wonderland',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          albumId: null,
          imageUrl: 'https://images.unsplash.com/photo-1643810003625-113bab1a490d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          description: 'Attack of the 50\' ad',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          albumId: null,
          imageUrl: 'https://images.unsplash.com/photo-1504019853082-9a4cb128c1ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
          description: 'Manhattan Bridge view from Dumbo',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          albumId: null,
          imageUrl: 'https://images.unsplash.com/photo-1641498057382-98921b7ddf7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJyb29rbHluJTIwbnljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          description: 'Home',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          albumId: null,
          imageUrl: 'https://images.unsplash.com/photo-1644254298332-f0f016ded081?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          description: 'Quiet lunch',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          albumId: null,
          imageUrl: 'https://images.unsplash.com/photo-1643905551668-a57972981ed5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
          description: 'Happy hour',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          albumId: null,
          imageUrl: 'https://images.unsplash.com/photo-1643628623441-601979734f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          description: 'Desert too pretty to eat',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          albumId: null,
          imageUrl: 'https://images.unsplash.com/photo-1643226228323-34e639efc40e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM0fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          description: 'Pizza time',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          albumId: null,
          imageUrl: 'https://images.unsplash.com/photo-1642354581513-9b6c05f1dd6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDQ4fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          description: 'Nothing like fresh pasta',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Images', null, {});
  }
};
