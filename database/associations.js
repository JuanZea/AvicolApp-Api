const { Settlement, Barn, Lot } = require("./index");

Settlement.hasMany(Barn, {foreignKey: 'settlement_id'});
Barn.belongsTo(Settlement, {foreignKey: 'settlement_id'});

Barn.hasMany(Lot, {foreignKey: 'barn_id'});
Lot.belongsTo(Barn, {foreignKey: 'barn_id'});