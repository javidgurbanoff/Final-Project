const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(403).send("Acced Denied");
  const verified = jwt.verify(token, process.env.TOKEN_SECRET);
  req.user = verified;
  next();
};
module.exports = VerifyToken;
