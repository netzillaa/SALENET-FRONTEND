const express = require("express");
let router = express.Router();
//const router = require("./productRoute");
const { registerUser, loginUser, emailVerify} = require("../controllers/Auth");
router.route("/register").post( registerUser);

router.route("/login").post(loginUser);

router.route("/emailVerify").post(emailVerify);

module.exports = router