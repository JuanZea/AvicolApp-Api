const router = require('express').Router();
const { Settlement } = require('../database');

// Controllers
const SettlementController = require('../app/controllers/SettlementController');
const BarnController = require('../app/controllers/BarnController');
const LotController = require('../app/controllers/LotController');


// Welcome
router.get('/', (req, res) => res.json({ foo: "bar" }));

// Settlements
router.get('/settlements', SettlementController.index);
router.post('/settlements', (req, res) =>{
    Settlement.create({
        name: req.body.name,
        location: req.body.location,
        address: req.body.address,
        sea_level: req.body.sea_level,
    }).then(post =>{
        res.json(post);
    })
});

// Barns
router.get('/barns', BarnController.index);

// Lots
router.get('/lots', LotController.index);

module.exports = router;