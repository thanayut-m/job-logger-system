const express = require("express");

const { signUp } = require("../controllers/AuthControllers");

const router = express.Router();

router.post("/signUp", signUp);

module.exports = router;
