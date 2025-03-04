const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.signUp = async (req, res) => {
  try {
    const { first_name, last_name, username, password } = req.body;

    if (!username || !password || !first_name || !last_name) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const existingUser = await prisma.user.findUnique({
      where: { username: username },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User is already in use" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const result = await prisma.user.create({
      data: {
        first_name,
        last_name,
        username,
        role: "person",
        status: false,
        password: hashPassword,
      },
    });

    console.log({ message: result });
    res.status(200).json({
      message: "success",
      data: result,
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ error: "Server Error" });
  }
};
