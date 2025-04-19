const { PrismaClient } = require("@prisma/client");
const { json } = require("body-parser");
const prisma = new PrismaClient();

exports.createChannels = async (req, res) => {
  try {
    const { Channel_name } = req.body;
    console.log(Channel_name);

    const existingChannel = await prisma.todoChannels.findFirst({
      where: { todo_Channels_name: Channel_name },
    });

    if (existingChannel) {
      return res.status(400).json({ error: "Channel is already in use" });
    }

    const result = await prisma.todoChannels.create({
      data: {
        todo_Channels_name: Channel_name,
        todo_Channels_status: true,
        todo_Channels_date: new Date(),
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
