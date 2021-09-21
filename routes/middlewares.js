const userIdChecker = (req, res, next) => {
    if (req.headers.user_id) next();
    else res.status(400).json({status: 400, message: "user_id not received"});
}

const settlementsIdChecker = (req, res, next) => {
    if (req.headers.settlement_id) next();
    else res.status(400).json({status: 400, message: "settlement_id not received"});
}

module.exports = { userIdChecker, settlementsIdChecker };