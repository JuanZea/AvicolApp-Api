module.exports = (sequelize, type) => {
    return sequelize.define('lot',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        age: type.INTEGER,
        numHens: type.INTEGER,
        vaccines: type.JSON,
    })
}