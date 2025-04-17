const { PrismaClient } = require("@prisma/client");
const { json } = require("body-parser");
const prisma = new PrismaClient();

exports.hospitalInfo = async (req, res) => {
  try {
    const { hospital_name } = req.body;
    console.log(hospital_name);
    const searchQuery = hospital_name || "".trim();

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
