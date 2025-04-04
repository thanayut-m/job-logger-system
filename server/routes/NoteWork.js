const express = require("express");

const router = express.Router();
const { isLogin } = require("../middlewares/AuthMiddleware");
const {
  noteWorkInfo,
  createNoteWork,
} = require("../controllers/NoteWorkControllers");

router.get(`/noteWorkInfo`, noteWorkInfo);
router.post(`/createNoteWork`, createNoteWork);

module.exports = router;
