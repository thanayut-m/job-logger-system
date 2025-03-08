const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.memberInfo = async (req, res) => {
  try {
    const result = await prisma.user.findMany({
      select: {
        username: true,
        password: true,
        first_name: true,
        last_name: true,
        role: true,
        status: true,
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
    console.log(page, limit);

    page = parseInt(page) || 1;
    limit = parseInt(limit) || 10;

    const skip = (page - 1) * limit;
    console.log(skip);

    const result = await prisma.user.findMany({
      select: {
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
