const { User } = require('../../database');

module.exports = {

  async index(req, res) {
    let users = await User.findAll();

    let response = {
      status: 200,
      data: users,
    }

    res.json(response);
  },

  async store(req, res) {
    let user = await User.create({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email
    });

    let response = {status: 201, data: user}
    res.status(201).json(response);
  },
}