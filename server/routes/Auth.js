const express = require("express");
const { json } = require("body-parser");
const { signUp } = require("../controllers/AuthControllers");

const router = express.Router();

router.get("/signUp", signUp);

module.exports = router;
