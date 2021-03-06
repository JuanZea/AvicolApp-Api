'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Settlement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Settlement.init({
    user_id: DataTypes.STRING,
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    address: DataTypes.STRING,
    sea_level: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Settlement',
  });
  return Settlement;
};