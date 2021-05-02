'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let settlements = [
      {
        name: 'Trinidad',
        location: 'Copacabana',
        address: 'CL 54F # 59BB - 29',
        sea_level: 1700,
        created_at: '2021-05-02 00:09:50',
        updated_at: '2021-05-02 00:09:50',
      },
      {
        name: 'Bucaros',
        location: 'Girardota',
        address: 'CL 44 # 29 - 35',
        sea_level: 1600,
        created_at: '2021-05-02 00:09:50',
        updated_at: '2021-05-02 00:09:50',
      },
      {
        name: 'Juarez',
        location: 'Barbosa',
        address: 'CL 87 # 53AB - 76',
        sea_level: 1800,
        created_at: '2021-05-02 00:09:50',
        updated_at: '2021-05-02 00:09:50',
      },
    ];

    await queryInterface.bulkInsert('Settlements', settlements, {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Settlements', null, {});
  }
};
