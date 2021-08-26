const router = require('express').Router();

// Controllers
const SettlementController = require('../app/controllers/SettlementController');
const BarnController = require('../app/controllers/BarnController');
const LotController = require('../app/controllers/LotController');


// Welcome
router.get('/', (req, res) => res.json({ foo: "bar" }));

// Settlements
router.get('/settlements', SettlementController.index);

router.post('/settlements', SettlementController.store);

// Barns
router.get('/barns', BarnController.index);

router.post('/barns', BarnController.store);

// Lots
router.get('/lots', LotController.index);

module.exports = router;