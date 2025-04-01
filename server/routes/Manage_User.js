const express = require("express");
const {
  memberInfo,
  memberInfoPage,
  updateMember,
  createMember,
  searchManageUser,
} = require("../controllers/ManageUserControllers");
const { isLogin } = require("../middlewares/AuthMiddleware");

const router = express.Router();

router.get("/memberInfo", isLogin, memberInfo);
router.post("/memberInfoPage", isLogin, memberInfoPage);
router.put("/updateMember", isLogin, updateMember);
router.post("/createMember", isLogin, createMember);
router.get("/searchManageUser", isLogin, searchManageUser);
// router.put("/memberInfo", isLogin, memberInfo);
// router.delete("/memberInfo", isLogin, memberInfo);

module.exports = router;
