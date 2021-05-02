const { Barn } = require('../../database');

module.exports = {
  async index(req, res) {
    let barns = await Barn.findAll();

    let response = {
      status: 200,
      data: barns,
    }

    res.json(response);
  }
}