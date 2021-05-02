const { Settlement } = require('../../database');
const snakeCaseKeys = require('snakecase-keys');

module.exports = {
  async index(req, res) {
    let settlements = await Settlement.findAll();

    console.log(settlements)

    res.json(settlements);
  }
}