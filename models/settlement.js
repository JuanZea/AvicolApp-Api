module.exports = (sequelize, type) => {
  return sequelize.define('settlement',{
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: type.STRING,
    location: type.STRING,
    address: type.STRING,
    seaLevel: type.INTEGER,
  })
}