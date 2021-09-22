const { Lot, Barn } = require('../../database');
const { validationResult } = require("express-validator");

module.exports = {

  async index(req, res) {

    const response = { status: 200 };
    const barn = await Barn.findOne({where: {id: req.headers.barn_id}, include: [{model: Lot}]});

    if (!barn) {
      response.message = "Barn not found";
      response.status = 404;
    } else {
      const settlement = await barn.getSettlement();
      if (settlement.user_id.toString() !== req.headers.user_id) {
        response.message = "The barn belongs to a settlement of another user";
        response.status = 401;
      } else {
        response.data = await barn.getLots();
      }
    }

      res.status(response.status).json(response);
  },

  async store(req, res) {

    const response = { status: 201 };
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(422).json({errors: errors});
    if (await )
    response.data = await Lot.create({barn_id: req.headers.barn_id, ...req.body});

    res.status(201).json(response);

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
}