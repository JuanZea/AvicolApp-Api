const { Settlement, Barn } = require('../../database');

module.exports = {

  async index(req, res) {
    const response = {status: 200};
    let barns = null;

    const settlement = await Settlement.findOne({where: {id: req.headers.settlement_id, user_id: req.headers.user_id}, include: [{ model: Barn }]});
    if (settlement) barns = settlement.Barns;

    response.data = barns;

    res.status(response.status).json(response);
  },

  async store(req, res) {
    let barn = await Barn.create({
      name: req.body.name,
      type: req.body.type,
      lots_number: req.body.lots_number,
    });

    let response = {
      status: 201,
      data: barn,
    }

    res.status(201).json(response);
  },

  async show(req, res) {
    const barn = await Barn.findOne({where: {id: req.params.id}});
    const response = {}

    if (barn) {
      response.status = 200;
      response.data = barn;
      res.status(200).json(response);
    } else {
      response.status = 404;
      res.status(404).json(response);
    }
  },

  async update(req, res) {
    await Barn.update(req.body, {
      where: {
        id: req.params.id
      }
    });


    let response = {status: 201}
    res.status(201).json(response);
  },

  async delete(req, res) {
    await Barn.destroy({where: {id: req.params.id}});

    const response = {
      status: 200
    }

    res.status(200).json(response);
  }

}