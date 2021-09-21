const router = require('express').Router();

const middlewares = require('./middlewares');
const BarnController = require('../app/controllers/BarnController');

router.use(middlewares.userIdChecker);
router.use(middlewares.settlementsIdChecker);

router.get('/', BarnController.index);
router.post('/', BarnController.store);
router.get('/:id', BarnController.show);
router.patch('/:id', BarnController.update);
router.delete('/:id', BarnController.delete);

module.exports = router;