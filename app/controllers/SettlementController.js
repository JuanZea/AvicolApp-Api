const { Settlement, Barn } = require('../../database');
const { validationResult } = require('express-validator');
const sequelize = require("sequelize");

module.exports = {

    async index(req, res) {

        const response = { status: 200 };
        response.data = await Settlement.findAll({
            include: [{ model: Barn, attributes: [] }],
            where: {user_id: req.headers.user_id},
            attributes: [
                'id', 'user_id', 'name', 'location', 'address', 'sea_level', 'created_at',
                [sequelize.fn('count', sequelize.col('barns.id')) ,'barns_number']
            ],
        });
        res.status(response.status).json(response);

    },

    async first(req, res) {

        const settlement = await Settlement.findOne({where: {user_id: req.headers.user_id}});
        const response = { status: settlement ? 200 : 404, data: settlement };
        res.status(response.status).json(response);

    },

    async store(req, res) {

        const response = { status: 201 };
        const errors = validationResult(req);
        if (!errors.isEmpty()) res.status(422).json({errors: errors});

        response.data = await Settlement.create({user_id: req.headers.user_id, ...req.body});
        res.status(201).json(response);

    },

    async show(req, res) {

        const settlement = await Settlement.findByPk(req.params.id);
        const response = { status: 200, data: null }

        if (!settlement) {
            response.status = 404;
            response.message = "Settlement not found";
        } else if (settlement.user_id.toString() !== req.headers.user_id) {
            response.message = "The settlement belongs to another user";
            response.status = 401;
        } else {
            response.data = settlement;
        }

        res.status(response.status).json(response);

    },

    async update(req, res) {

        const response = { status: 201 };
        const errors = validationResult(req);
        if (!errors.isEmpty()) res.status(422).json({errors: errors});

        const settlement = await Settlement.findByPk(req.params.id);

        if (!settlement) {
            response.status = 404;
            response.data = settlement;
        } else if (settlement.user_id.toString() !== req.headers.user_id) {
            response.message = "The settlement belongs to another user";
            response.status = 401;
        } else {
            response.data = await settlement.update(req.body);
        }

        res.status(201).json(response);

    },

    async delete(req, res) {

        const response = { status: 200 }
        const settlement = await Settlement.findByPk(req.params.id);

        if (settlement.user_id !== req.headers.user_id) {
            response.status = 401;
            response.message = "The settlement belongs to another user";
        } else {
            if (await settlement.destroy()) response.message = "Settlement deleted successfully";
            else {
                response.status = 400;
                response.message = "Delete settlement failed";
            }
        }

        res.status(response.status).json(response);

    }

}