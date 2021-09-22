const userIdChecker = (req, res, next) => {
    if (req.headers.user_id) next();
    else res.status(400).json({status: 400, message: "user_id not received"});
}

const settlementIdChecker = (req, res, next) => {
    if (req.headers.settlement_id) next();
    else res.status(400).json({status: 400, message: "settlement_id not received"});
}

const barnIdChecker = (req, res, next) => {
    if (req.headers.barn_id) next();
    else res.status(400).json({status: 400, message: "barn_id not received"});
}

module.exports = { userIdChecker, settlementIdChecker, barnIdChecker };