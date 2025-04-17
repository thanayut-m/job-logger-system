const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

exports.memberInfo = async (req, res) => {
  try {
    const result = await prisma.user.findMany({
      select: {
        user_id: true,
        username: true,
        password: true,
        first_name: true,
        last_name: true,
        role: true,
        status: true,
        users_update_at: true,
      },
    });
    console.log(result);
    return res.status(200).json({ result: result, message: "success" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error!!!");
  }
};

exports.memberInfoPage = async (req, res) => {
  try {
    let { page, limit } = req.body;
    // console.log(page, limit);

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const skip = (page - 1) * limit;
    // console.log(skip);

    const result = await prisma.user.findMany({
      select: {
        user_id: true,
        username: true,
        first_name: true,
        last_name: true,
        role: true,
        status: true,
      },
      skip: skip,
      take: limit,
    });

    const totalRecords = await prisma.user.count();
    const totalPages = Math.ceil(totalRecords / limit);

    res.status(200).json({
      message: "success",
      totalPages: totalPages,
      totalRecords: totalRecords,
      result: result,
    });
  } catch (err) {
    res.status(500).json("Server Error! : " + err);
  }
};

exports.updateMember = async (req, res) => {
  try {
    const { user_id, first_name, last_name, role, username } = req.body;

    const result = await prisma.user.update({
      where: {
        user_id: parseInt(user_id),
      },
      data: {
        first_name: first_name,
        last_name: last_name,
        role: role,
        username: username,
      },
    });
    res.status(200).json({
      message: "success",
      result: result,
    });
  } catch (err) {
    res.status(500).json("Server Error! : " + err);
  }
};

exports.createMember = async (req, res) => {
  try {
    const { first_name, last_name, password, role, username } = req.body;

    const existingUser = await prisma.user.findUnique({
      where: { username: username },
    });

    if (existingUser) {
      res.status(400).json({ message: "User is already in use" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const result = await prisma.user.create({
      data: {
        first_name: first_name,
        last_name: last_name,
        password: hashPassword,
        role: role,
        username: username,
        status: true,
      },
    });
    res.status(200).json({
      message: "success",
      result: result,
    });
  } catch (err) {
    res.status(500).json("Server Error! :" + err);
  }
};

exports.searchManageUser = async (req, res) => {
  try {
    const { searchValue } = req.query;
    const searchQuery = searchValue || "".trim();

    const whereCondition = searchQuery
      ? {
          OR: [
            { username: { contains: searchQuery, mode: "insensitive" } },
            { first_name: { contains: searchQuery, mode: "insensitive" } },
            { last_name: { contains: searchQuery, mode: "insensitive" } },
          ],
        }
      : {};

    const result = await prisma.user.findMany({
      where: whereCondition,
      orderBy: { role: "asc" },
    });

    res.status(200).json({
      message: "success",
      result,
    });
  } catch (err) {
    console.error("Error searching users:", err);

    res.status(500).json({
      error: "Server Error!",
      details: err?.message || "Something went wrong.",
    });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    let { user_id, status } = req.body;

    if (!user_id || status === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    user_id = Number(user_id);

    if (isNaN(user_id)) {
      return res.status(400).json({ error: "User ID must be a valid number" });
    }

    const user = await prisma.user.findUnique({
      where: { user_id: user_id },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const result = await prisma.user.update({
      where: { user_id: user_id },
      data: { status: status },
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
