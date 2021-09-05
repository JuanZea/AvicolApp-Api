const {Settlement} = require('../../database');
const {validationResult} = require('express-validator');

module.exports = {
    async index(req, res) {
        const settlements = await Settlement.findAll();

        const response = {
            status: 200,
            data: settlements,
        }

        res.json(response);
    },

    async store(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({errors: errors});
            return;
        }

        const settlement = await Settlement.create(req.body);

        const response = {
            status: 201,
            data: settlement,
        }

        res.status(201).json(response);
    }
}