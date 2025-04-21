const { PrismaClient } = require("@prisma/client");
const { json } = require("body-parser");
const prisma = new PrismaClient();

exports.laSupportInfo = async (req, res) => {
  try {
    const { searchValue } = req.query;

    const searchQuery = searchValue || "".trim();

    const whereCondition = searchQuery
      ? {
          todo_la_Support_name: {
            contains: searchQuery,
            mode: "insensitive",
          },
        }
      : {};

    const result = await prisma.todoLaSupport.findMany({
      where: whereCondition,
      orderBy: {
        todo_la_Support_id: "asc",
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

exports.createLaSupport = async (req, res) => {
  try {
    const { la_support_name } = req.body;

    const existingLaSupport = await prisma.todoLaSupport.findFirst({
      where: { todo_la_Support_name: la_support_name },
    });

    if (existingLaSupport) {
      return res.status(400).json({ error: "La Support is already in use" });
    }

    const result = await prisma.todoLaSupport.create({
      data: {
        todo_la_Support_name: la_support_name,
        todo_la_Support_status: true,
        todo_la_Support_date: new Date(),
      },
    });

    res.status(200).json({
      message: "success",
      result,
    });
  } catch (err) {
    console.log("Error :", err);
    1;
    res.status(500).json({
      error: "Server Error!",
      details: err?.message || "Something went wrong.",
    });
  }
};

exports.updateStatusLaSupport = async (req, res) => {
  try {
    let { la_support_id, la_support_status } = req.body;

    if (!la_support_id || la_support_status === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    laSupportId = Number(la_support_id);

    if (isNaN(laSupportId)) {
      return res.status(400).json({ error: "User ID must be a valid number" });
    }

    const laSupport = await prisma.todoLaSupport.findUnique({
      where: { todo_la_Support_id: la_support_id },
    });

    if (!laSupport) {
      return res.status(404).json({ error: "User not found" });
    }

    const result = await prisma.todoLaSupport.update({
      where: { todo_la_Support_id: la_support_id },
      data: { todo_la_Support_status: la_support_status },
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

exports.updateLaSupport = async (req, res) => {
  try {
    const { la_support_id, la_support_name } = req.body;

    const existingLaSupport = await prisma.todoLaSupport.findFirst({
      where: { todo_la_Support_name: la_support_name },
    });

    if (existingLaSupport) {
      return res.status(400).json({ error: "La Support is already in use" });
    }

    const result = await prisma.todoLaSupport.update({
      where: { todo_la_Support_id: parseInt(la_support_id) },
      data: {
        todo_la_Support_name: la_support_name,
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
