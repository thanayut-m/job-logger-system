const express = require("express");
const {
  memberInfo,
  memberInfoPage,
} = require("../controllers/ManageUserControllers");
const { isLogin } = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.get("/memberInfo", isLogin, memberInfo);
router.post("/memberInfoPage", memberInfoPage);
// router.post("/memberInfo", isLogin, memberInfo);
// router.put("/memberInfo", isLogin, memberInfo);
// router.delete("/memberInfo", isLogin, memberInfo);

module.exports = router;
