const router = require('express').Router();

// Settlements
router.use('/settlements', require('./settlements'));

// Barns
router.use('/barns', require('./barns'));

// Lots
router.use('/lots', require('./lots'));

module.exports = router;