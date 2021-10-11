const router = require('express').Router();

const middlewares = require('./middlewares');
const LotRequest= require('../app/requests/LotRequest')
const LotController = require('../app/controllers/LotController');

router.use(middlewares.userIdChecker);
router.use(middlewares.barnIdChecker);

router.get('/', LotController.index);
router.post('/', ...LotRequest.store, LotController.store);
router.delete('/:id', LotController.delete);
router.get('/:id', LotController.show);

module.exports = router;