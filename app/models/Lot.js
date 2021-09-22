'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Lot.init({
    barn_id: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    hens_number: DataTypes.INTEGER,
    vaccines: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Lot',
  });
  return Lot;
};