const { check } = require('express-validator');

module.exports = {

    store: [
        check('name').isString().notEmpty().isLength({max: 255}),
        check('location').isString().notEmpty().isLength({max: 255}),
        check('address').isString().notEmpty().isLength({max: 255}),
        check('sea_level').isString().notEmpty().isLength({max: 255}),
    ]

}
