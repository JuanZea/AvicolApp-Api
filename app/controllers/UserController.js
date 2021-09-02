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
    let user = await User.create(req.body);


    let response = {status: 201, data: user}
    res.status(201).json(response);
  },


  async update(req, res) {
    console.log('req.body');
    const rows = await User.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    let response = {status: 201, message: `el número de datos afectados es: ${rows}`}
    res.status(201).json(response);
  },

}