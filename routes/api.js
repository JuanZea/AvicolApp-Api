const router = require('express').Router();
const middlewares = require('./middlewares');

// Controllers

const LotController = require('../app/controllers/LotController');

// Settlements
router.use('/settlements', require('./settlements'));

// Barns
router.use('/barns', require('./barns'));

// Lots
router.get('/lots', LotController.index);

module.exports = router;