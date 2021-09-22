const { Settlement, Barn, Lot } = require('../../database');
const { validationResult } = require("express-validator");
const sequelize = require("sequelize");

module.exports = {

  async index(req, res) {

    const response = { status: 200 };
    const settlement = await Settlement.findOne({where: {id: req.headers.settlement_id}, include: [{ model: Barn }]});

    if (!settlement) {
      response.message = "Settlement not found";
      response.status = 404;
    } else if (settlement.user_id.toString() !== req.headers.user_id) {
      response.message = "The settlement belongs to another user";
      response.status = 401;
    } else {
      response.data = await settlement.getBarns({
            group: 'barn.id',
            include: [{ model: Lot, attributes: [] }],
            attributes: [
                'id', 'settlement_id', 'name', 'type', 'created_at',
                [sequelize.fn('count', sequelize.col('lots.id')) ,'lots_number']
            ],
        });
    }

    res.status(response.status).json(response);

  },

  async store(req, res) {

    const response = { status: 201 };
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(422).json({errors: errors});

    response.data = await Barn.create({settlement_id: req.headers.settlement_id, ...req.body});

    res.status(201).json(response);

  },

  async show(req, res) {
    const barn = await Barn.findOne({where: {id: req.params.id},
        include: [{ model: Lot, attributes: [] }],
        attributes: [
          'id', 'settlement_id', 'name', 'type', 'created_at',
          [sequelize.fn('count', sequelize.col('lots.id')) ,'lots_number']
        ],});
    const response = {status: 200, data: null}

    if (!barn) {
      response.status = 404;
      response.message = "Barn not found";
    } else {
      const settlement = await barn.getSettlement();
      if (settlement.user_id.toString() === req.headers.user_id) {
        response.data = barn;
      } else {
        response.status = 401;
        response.message = "The barn belongs to a settlement of another user";
      }
    }

    res.status(response.status).json(response);

  },

  async update(req, res) {

    const response = { status: 201, data: null };
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(422).json({errors: errors});

    const barn = await Barn.findByPk(req.params.id);

    if (!barn) {
      response.status = 404;
      response.message = "Barn not found";
    } else {
      const settlement = await barn.getSettlement();
      if (settlement.user_id.toString() === req.headers.user_id) {
        response.data = await barn.update(req.body);
      } else {
        response.status = 401;
        response.message = "The barn belongs to a settlement of another user";
      }
    }

    res.status(response.status).json(response);

  },

  async delete(req, res) {

    const barn = await Barn.findOne({where: {id: req.params.id}});
    const response = {status: 200, data: null}

    if (!barn) {
      response.status = 404;
      response.message = "Barn not found";
    } else {
      const settlement = await barn.getSettlement();
      if (settlement.user_id.toString() !== req.headers.user_id) {
        response.status = 401;
        response.message = "The barn belongs to a settlement of another user";
      } else {
        if (await barn.destroy()) response.message = "Barn deleted successfully";
            else {
                response.status = 400;
                response.message = "Delete barn failed";
            }
      }
    }

    res.status(response.status).json(response);

  }

}