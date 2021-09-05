const {Settlement} = require('../../database');
const {validationResult} = require('express-validator');

module.exports = {

    async index(req, res) {
        let settlements = await Settlement.findAll();

        let response = {
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

        let settlement = await Settlement.create({
            name: req.body.name,
            location: req.body.location,
            address: req.body.address,
            sea_level: req.body.sea_level,
            user_id: req.body.user_id,
        });

        let response = {
            status: 201,
            data: settlement,
        }

        res.status(201).json(response);
    },

}