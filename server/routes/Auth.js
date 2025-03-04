const express = require("express");

const {
  signUp,
  signIn,
  currentUser,
} = require("../controllers/AuthControllers");
const { isLogin } = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);

router.get("/current-user", isLogin, currentUser);

module.exports = router;
