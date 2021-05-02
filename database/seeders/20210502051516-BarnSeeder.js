'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let barns = [
      {
        name: 'Galpon 1',
        type: 'Galpon',
        lots_number: 4,
        created_at: '2021-05-02 00:09:50',
        updated_at: '2021-05-02 00:09:50',
      },
      {
        name: 'Granero',
        type: 'Cautividad',
        lots_number: 8,
        created_at: '2021-05-02 00:09:50',
        updated_at: '2021-05-02 00:09:50',
      },
      {
        name: 'Galpon 2',
        type: 'Galpon',
        lots_number: 2,
        created_at: '2021-05-02 00:09:50',
        updated_at: '2021-05-02 00:09:50',
      },
    ];

    await queryInterface.bulkInsert('Barns', barns, {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Barns', null, {});
  }
};
