const { PrismaClient } = require("@prisma/client");
const { json } = require("body-parser");
const prisma = new PrismaClient();

exports.hospitalInfo = async (req, res) => {
  try {
    const { searchValue } = req.query;
    // console.log(searchValue);
    const searchQuery = searchValue || "".trim();

    const whereCondition = searchQuery
      ? {
          hospital_name: {
            contains: searchQuery,
            mode: "insensitive",
          },
        }
      : {};

    const result = await prisma.hospital.findMany({
      where: whereCondition,
      orderBy: {
        hospital_id: "asc",
      },
    });

    res.status(200).json({
      message: "success",
      result,
    });
  } catch (err) {
    console.log("Error :", err);

    res.status(500).json({
      error: "Server Error!",
      details: err?.message || "Something wont wrong.",
    });
  }
};

exports.createHospitals = async (req, res) => {
  try {
    const { hospital_name } = req.body;

    const existingHospital = await prisma.hospital.findFirst({
      where: { hospital_name: hospital_name },
    });

    if (existingHospital) {
      return res.status(400).json({ error: "Hospital is already in use" });
    }

    const result = await prisma.hospital.create({
      data: {
        hospital_name: hospital_name,
        hospital_date: new Date(),
      },
    });

    res.status(200).json({
      message: "success",
      result,
    });
  } catch (err) {
    console.log("Error :", err);

    res.status(500).json({
      error: "Server Error!",
      details: err?.message || "Something went wrong.",
    });
  }
};

exports.updateHospital = async (req, res) => {
  try {
    const { hospital_name, hospital_id } = req.body;

    const existingHospital = await prisma.hospital.findFirst({
      where: { hospital_name: hospital_name },
    });

    if (existingHospital) {
      return res.status(400).json({ error: "Hospital is already in use" });
    }

    const result = await prisma.hospital.update({
      where: { hospital_id: parseInt(hospital_id) },
      data: {
        hospital_name: hospital_name,
      },
    });

    res.status(200).json({
      message: "success",
      result,
    });
  } catch (err) {
    console.log("Error :", err);

    res.status(500).json({
      error: "Server Error!",
      details: err?.message || "Something went wrong.",
    });
  }
};

exports.updateStatusHospital = async (req, res) => {
  try {
    let { Hospital_id, Hospital_status } = req.body;

    if (!Hospital_id || Hospital_status === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    hospitalId = Number(Hospital_id);

    if (isNaN(hospitalId)) {
      return res.status(400).json({ error: "User ID must be a valid number" });
    }

    const hospital = await prisma.hospital.findUnique({
      where: { hospital_id: Hospital_id },
    });

    if (!hospital) {
      return res.status(404).json({ error: "User not found" });
    }

    const result = await prisma.hospital.update({
      where: { hospital_id: Hospital_id },
      data: { hospital_status: Hospital_status },
    });

    res.status(200).json({
      message: "success",
      result: result,
    });
  } catch (err) {
    console.error("Error searching users:", err);

    res.status(500).json({
      error: "Server Error!",
      details: err?.message || "Something went wrong.",
    });
  }
};
