const router = require('express').Router();

// Controllers
const SettlementController = require('../app/controllers/SettlementController');

// Welcome
router.get('/', (req, res) => res.json({ foo: "bar" }));

// Settlements
router.get('/settlements', SettlementController.index);

module.exports = router;