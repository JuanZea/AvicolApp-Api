'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    let lots = [
      {
        age: 9,
        hens_number: 32,
        vaccines: JSON.stringify({
          "name": "Newcastle"
        }),
        created_at: '2021-05-02 00:09:50',
        updated_at: '2021-05-02 00:09:50',
      },
      {
        age: 78,
        hens_number: 17,
        vaccines: JSON.stringify({
          "name": "Gumboro"
        }),
        created_at: '2021-05-02 00:09:50',
        updated_at: '2021-05-02 00:09:50',
      },
      {
        age: 45,
        hens_number: 70,
        vaccines: JSON.stringify({
          "name": "Viruela"
        }),
        created_at: '2021-05-02 00:09:50',
        updated_at: '2021-05-02 00:09:50',
      },
    ];

    await queryInterface.bulkInsert('Lots', lots, {});

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Lots', null, {});
  }
};
