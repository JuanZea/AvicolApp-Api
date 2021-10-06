const router = require('express').Router();
const MetricsController = require('../app/controllers/MetricsController');

// Settlements
router.use('/settlements', require('./settlements'));

// Barns
router.use('/barns', require('./barns'));

// Lots
router.use('/lots', require('./lots'));

router.get('/metrics', MetricsController.index);

module.exports = router;