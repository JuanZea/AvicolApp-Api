const { Barn } = require('../../database');

module.exports = {
  async index(req, res) {
    let barns = await Barn.findAll();

    console.log(barns)

    res.json(barns);
  }
}