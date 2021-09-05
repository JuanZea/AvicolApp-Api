const {check} = require('express-validator');

module.exports = {
    store: [
        check('name').isString().isLength({min: 2, max: 255}),
        check('location').isString().isLength({min: 1, max: 255}),
        check('address').isString().isLength({min: 1, max: 255}),
        check('sea_level').isString().isLength({min: 1, max: 255}),
        check('user_id').isString().isLength({min: 1, max: 255}),
    ]
}
