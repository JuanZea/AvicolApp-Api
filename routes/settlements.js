const router = require('express').Router();

const middlewares = require('./middlewares');
const SettlementRequest = require("../app/requests/SettlementRequest");
const SettlementController = require('../app/controllers/SettlementController');

router.use(middlewares.userIdChecker);

router.get('', SettlementController.index);
router.get('/first', SettlementController.first);
router.post('', ...SettlementRequest.store, SettlementController.store);
router.get('/:id', SettlementController.show);
router.patch('/:id', SettlementController.update);
router.delete('/:id', SettlementController.delete);

module.exports = router;