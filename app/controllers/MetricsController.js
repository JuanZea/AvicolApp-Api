const { Settlement, Barn, Lot } = require('../../database');
const { validationResult } = require('express-validator');
const sequelize = require("sequelize");
const _ = require('lodash');

module.exports = {
    async index(req, res) {
        const response = { status: 200, data: {} };
        response.data.settlements = await Settlement.findAll({where: {user_id: req.headers.user_id}});

        let settlements =  _.map(response.data.settlements, 'id');
        response.data.barns = await Barn.findAll({where: {settlement_id: settlements},
            group: 'barn.id',
            include: [{ model: Lot, attributes: [] }],
            attributes: [
                'id', 'settlement_id', 'name', 'type', 'created_at',
                [sequelize.fn('count', sequelize.col('lots.id')) ,'lots_number'],
                [sequelize.fn('sum', sequelize.col('lots.hens_number')) ,'hens_number']
            ]});

        let barns =  _.map(response.data.barns, 'id');
        response.data.lots = await Lot.findAll({where: {barn_id: barns},
            include: [{ model: Barn, attributes: ['name'] }]
        });
        res.status(response.status).json(response);
    },
}