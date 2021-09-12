const router = require('express').Router();

// Controllers
const SettlementController = require('../app/controllers/SettlementController');
const BarnController = require('../app/controllers/BarnController');
const LotController = require('../app/controllers/LotController');
const SettlementRequest = require("../app/requests/SettlementRequest");

// Settlements
router.get('/settlements', SettlementController.index);
router.get('/settlements/first', SettlementController.first);
router.get('/settlements/:id', SettlementController.show);
router.post('/settlements', ...SettlementRequest.store, SettlementController.store);
router.delete('/settlements/:id', SettlementController.delete);

// Barns
router.get('/barns', BarnController.index);

router.post('/barns', BarnController.store);

// Lots
router.get('/lots', LotController.index);

module.exports = router;