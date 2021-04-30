const { Settlement } = require('../../database');

module.exports = {
  async index(req, res) {
    let settlements = await Settlement.findAll();

    console.log(settlements)

    res.json(settlements);
  }
}