const express = require("express");
const {
  createLaSupport,
  laSupportInfo,
  updateStatusLaSupport,
  updateLaSupport,
} = require("../controllers/LaSupportControllers");

const router = express.Router();

router.get(`/supportLaInfo`, laSupportInfo);
router.post(`/createLaSupport`, createLaSupport);
router.put("/updateLaSupport", updateLaSupport);
router.put("/updateStatusLaSupport", updateStatusLaSupport);

module.exports = router;
