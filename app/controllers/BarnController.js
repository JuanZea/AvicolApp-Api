const { Barn} = require('../../database');

module.exports = {

  async index(req, res) {
    const barns = await Barn.findAll({where: {settlement_id: req.headers.settlement_id}});

    const response = {
      status: 200,
      data: barns,
    }

    res.json(response);
  },

  async store(req, res) {
    let barn = await Barn.create({
      name: req.body.name,
      type: req.body.type,
      lots_number: req.body.lots_number,
    });

    let response = {
      status: 201,
      data: barn,
    }

    res.status(201).json(response);
  },

}