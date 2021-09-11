const {Settlement} = require('../../database');
const {validationResult} = require('express-validator');

module.exports = {
    async index(req, res) {
        const settlements = await Settlement.findAll({where: {user_id: req.headers.user_id}});

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
    },

    async first(req, res) {
        const settlement = await Settlement.findOne({where: {user_id: req.headers.user_id}});
        const response = {}

        if (settlement) {
            response.status = 200;
            response.data = settlement;
            res.status(200).json(response);
        } else {
            response.status = 404;
            res.status(404).json(response);
        }
    },

    async show(req, res) {
        const settlement = await Settlement.findOne({where: {user_id: req.headers.user_id, id: req.params.id}});
        const response = {}

        if (settlement) {
            response.status = 200;
            response.data = settlement;
            res.status(200).json(response);
        } else {
            response.status = 404;
            res.status(404).json(response);
        }
    },

    async delete(req, res) {
        await Settlement.destroy({where: {id: req.params.id}});

        const response = {
            status: 200
        }

        res.status(200).json(response);
    }
}