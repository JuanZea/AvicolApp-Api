const { Lot, Barn } = require('../../database');

module.exports = {

  async index(req, res) {

    const response = {status: 200};
    const barn = await Barn.findOne({where: {id: req.headers.barn_id}, include: [{model: Lot}]});

    if (!barn) {
      response.message = "Barn not found";
      response.status = 404;
    } else if (barn.settlement_id.toString() !== req.headers.settlement_id) {
      response.message = "The barn belongs to another settlement";
      response.status = 401;
    } else {
      response.data = await barn.getLots();
    }

      res.status(response.status).json(response);
  }
}