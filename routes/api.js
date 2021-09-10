const router = require('express').Router();

// Controllers
const UserController = require('../app/controllers/UserController');
const SettlementController = require('../app/controllers/SettlementController');
const BarnController = require('../app/controllers/BarnController');
const LotController = require('../app/controllers/LotController');
const SettlementRequest = require("../app/requests/SettlementRequest");

// Users
router.get('/users', UserController.index);
router.post('/users', UserController.store);
router.patch('/users/:id', UserController.update);
router.get('/users/:id', UserController.one);

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