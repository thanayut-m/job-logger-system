const express = require("express");
const {
  hospitalInfo,
  createHospitals,
  updateHospital,
  updateStatusHospital,
} = require("../controllers/HospitalControllers");

const router = express.Router();

router.get(`/hospitalInfo`, hospitalInfo);
router.post(`/createHospitals`, createHospitals);
router.put("/updateHospital", updateHospital);
router.put("/updateStatusHospital", updateStatusHospital);

module.exports = router;
