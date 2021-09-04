const router = require('express').Router();

// Controllers
const UserController = require('../app/controllers/UserController');
const SettlementController = require('../app/controllers/SettlementController');
const BarnController = require('../app/controllers/BarnController');
const LotController = require('../app/controllers/LotController');

// Users
router.get('/users', UserController.index);
router.post('/users', UserController.store);
router.patch('/users/:id', UserController.update);
router.get('/users/:id', UserController.one);

// Settlements
router.get('/settlements', SettlementController.index);

router.post('/settlements', SettlementController.store);

router.get('/settlements/:id', SettlementController.show);

// Barns
router.get('/barns', BarnController.index);

router.post('/barns', BarnController.store);

// Lots
router.get('/lots', LotController.index);

module.exports = router;