const { Settlement, Barn } = require('../../database');
const {validationResult} = require("express-validator");

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
      response.data = settlement.Barns;
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
    const barn = await Barn.findOne({where: {id: req.params.id}});
    const response = {}

    if (barn) {
      response.status = 200;
      response.data = barn;
      res.status(200).json(response);
    } else {
      response.status = 404;
      res.status(404).json(response);
    }
  },

  async update(req, res) {
    await Barn.update(req.body, {
      where: {
        id: req.params.id
      }
    });


    let response = {status: 201}
    res.status(201).json(response);
  },

  async delete(req, res) {
    await Barn.destroy({where: {id: req.params.id}});

    const response = {
      status: 200
    }

    res.status(200).json(response);
  }

}