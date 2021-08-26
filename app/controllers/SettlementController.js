const { Settlement } = require('../../database');

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
    let settlement = await Settlement.create({
      name: req.body.name,
      location: req.body.location,
      address: req.body.address,
      sea_level: req.body.sea_level,
    });

    let response = {
      status: 201,
      data: settlement,
    }

    res.status(201).json(response);
  },

}