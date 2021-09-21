const { Settlement, Barn } = require("./index");

Settlement.hasMany(Barn, {foreignKey: 'settlement_id'});
Barn.belongsTo(Settlement, {foreignKey: 'settlement_id'});