const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');
const db = {};

db.connection = new Sequelize(
  config.database,
  config.username,
  config.password,
  config.options,
);

// Testing de connection
db.connection.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});

// Linking models to the DB
db.Settlement = require('../app/models/Settlement')(db.connection, DataTypes);
db.Barn = require('../app/models/Barn')(db.connection, DataTypes);
db.Lot = require('../app/models/Lot')(db.connection, DataTypes);

module.exports = db;