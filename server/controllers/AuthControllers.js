const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const { promisify } = require("util");

require("dotenv").config();

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

exports.signIn = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const checkUsername = await prisma.user.findUnique({
      where: { username: username },
    });

    if (!checkUsername || checkUsername.status !== true) {
      return res.status(400).json({ message: "User not found or disabled!" });
    }

    const isMatch = await bcrypt.compare(password, checkUsername.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials!" });
    }

    await prisma.user.update({
      where: { username: username },
      data: {
        users_update_at: new Date(),
      },
    });

    const payload = {
      user: { id: checkUsername.user_id },
    };

    try {
      const signJwt = promisify(jwt.sign);
      const token = await signJwt(payload, process.env.JWT_SECRET);

      res.status(200).json({
        message: "signIn Success.",
        token: token,
      });
    } catch (jwtError) {
      console.error("JWT Sign Error:", jwtError);
      res.status(500).json({ message: "Failed to generate token" });
    }
  } catch (err) {
    res.status(500).send("Server Error!!!");
  }
};

exports.currentUser = async (req, res) => {
  try {
    const result = await prisma.user.findUnique({
      where: {
        user_id: req.user.id,
      },
      select: {
        user_id: true,
        first_name: true,
        last_name: true,
        role: true,
        username: true,
        users_update_at: true,
      },
    });
    // console.log(result);
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).send("Server Error!!!");
  }
};
