const express = require("express");
const {
  hospitalInfo,
  createHospitals,
} = require("../controllers/HospitalControllers");

const router = express.Router();

router.get(`/hospitalInfo`, hospitalInfo);
router.post(`/createHospitals`, createHospitals);

module.exports = router;
