'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Barn extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Barn.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    lots_number: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Barn',
  });
  return Barn;
};