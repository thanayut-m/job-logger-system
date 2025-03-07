const express = require("express");
const { memberInfo } = require("../controllers/ManageUserControllers");
const { isLogin } = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.get("/memberInfo", isLogin, memberInfo);
// router.post("/memberInfo", isLogin, memberInfo);
// router.put("/memberInfo", isLogin, memberInfo);
// router.delete("/memberInfo", isLogin, memberInfo);

module.exports = router;
