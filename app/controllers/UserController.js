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
    console.log(req.body)
    let user = await User.create({firebase_id: req.body.firebaseId});


    let response = {
      status: 201,
      data: user,
    }

    res.status(201).json(response);
  },
}