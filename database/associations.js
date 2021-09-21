const { Settlement, Barn } = require("./index");

Settlement.hasMany(Barn);
Barn.belongsTo(Settlement);