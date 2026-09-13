'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      name: 'Luis Carlos da Silva Dias (Postgres)',
      email: 'silvadias.postgres@outlook.com',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', { email: 'silvadias.postgres@outlook.com' }, {});
  }
};
