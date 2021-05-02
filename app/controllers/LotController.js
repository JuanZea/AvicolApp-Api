const { Lot } = require('../../database');

module.exports = {
  async index(req, res) {
    let lots = await Lot.findAll();

    let response = {
      status: 200,
      data: lots,
    }

    res.json(response);
  }
}