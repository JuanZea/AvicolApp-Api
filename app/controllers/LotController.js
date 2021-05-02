const { Lot } = require('../../database');

module.exports = {
  async index(req, res) {
    let lots = await Lot.findAll();

    console.log(lots)

    res.json(lots);
  }
}