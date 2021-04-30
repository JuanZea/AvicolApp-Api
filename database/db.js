const { Sequelize } = require('sequelize');
const { database } = require('../config');

const SettlementModel = require('../models/settlement');
const BarnModel = require('../models/barn');
const LotModel = require('../models/lot');
// Crear usuario de mysql

const sequelize = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    host: database.host,
    port: database.port,
    dialect: database.dialect,
  }
);

const Settlement = SettlementModel(sequelize, Sequelize);
const Barn = BarnModel(sequelize, Sequelize);
const Lot = LotModel(sequelize, Sequelize);

sequelize.sync().then(() => {
  console.log('Tablas sincronizadas')
});

module.exports = { sequelize, Settlement, Barn, Lot };