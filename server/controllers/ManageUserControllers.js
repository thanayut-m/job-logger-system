const { PrismaClient } = require("@prisma/client");
const { json } = require("body-parser");

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
