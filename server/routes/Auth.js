const express = require("express");

const { signUp, signIn } = require("../controllers/AuthControllers");

const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);

module.exports = router;
