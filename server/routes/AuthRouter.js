const express = require("express");
const { AuthRegister, AuthLogin } = require("../controllers/UserController");
const VerifyToken = require("../middleware/VerifyToken");
const { notifyPasswordChange } = require("../controllers/AuthController");

const router = express.Router();

router.post("/register", AuthRegister);
router.post("/login", AuthLogin);
router.post("/notify-password-change", notifyPasswordChange);

module.exports = router;
