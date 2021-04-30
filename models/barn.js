module.exports = (sequelize,type) => {
    return sequelize.define('barn',{
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: type.INTEGER,
        type: type.STRING,
    })
}