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
}