const { check } = require('express-validator');

module.exports = {

    store: [
        check('age').isNumeric().notEmpty().isInt({min: 0, max: 100}),
        check('hens_number').isNumeric().notEmpty().isInt({min: 0, max: 300}),
    ]

}