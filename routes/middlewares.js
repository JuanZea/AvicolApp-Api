const userIdChecker = (req, res, next) => {
    if (req.headers.user_id) next();
    else res.status(400).json({status: 400});
}

const settlementsIdChecker = (req, res, next) => {
    if (req.headers.settlement_id) next();
    else res.status(400).json({status: 400});
}

module.exports = {userIdChecker, settlementsIdChecker};