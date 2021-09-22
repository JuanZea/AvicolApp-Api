const { check } = require('express-validator');

module.exports = {

    store: [
        check('name').isString().notEmpty().isLength({max: 255}),
        check('type').isString().notEmpty().isIn(['gallinasFelices', 'cautividad']),
    ]

}