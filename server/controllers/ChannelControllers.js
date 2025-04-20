const { PrismaClient } = require("@prisma/client");
const { json } = require("body-parser");
const prisma = new PrismaClient();

exports.channelInfo = async (req, res) => {
  try {
    const { searchValue } = req.query;

    const searchQuery = searchValue || "".trim();

    const whereCondition = searchQuery
      ? {
          todo_Channels_name: {
            contains: searchQuery,
            mode: "insensitive",
          },
        }
      : {};

    const result = await prisma.todoChannels.findMany({
      where: whereCondition,
      orderBy: {
        todo_Channels_id: "asc",
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

exports.createChannels = async (req, res) => {
  try {
    const { Channel_name } = req.body;

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

exports.updateChannel = async (req, res) => {
  try {
    const { channel_name, channel_id } = req.body;
    console.log(channel_id);
    console.log(channel_name);

    const existingChannel = await prisma.todoChannels.findFirst({
      where: { todo_Channels_name: channel_name },
    });

    if (existingChannel) {
      return res.status(400).json({ error: "Channel is already in use" });
    }

    const result = await prisma.todoChannels.update({
      where: { todo_Channels_id: parseInt(channel_id) },
      data: {
        todo_Channels_name: channel_name,
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

exports.updateStatusChannel = async (req, res) => {
  try {
    let { Channel_id, Channel_status } = req.body;
    console.log(Channel_id);
    console.log(Channel_status);

    if (!Channel_id || Channel_status === undefined) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    channelId = Number(Channel_id);

    if (isNaN(channelId)) {
      return res.status(400).json({ error: "User ID must be a valid number" });
    }

    const channel = await prisma.todoChannels.findUnique({
      where: { todo_Channels_id: Channel_id },
    });

    if (!channel) {
      return res.status(404).json({ error: "User not found" });
    }

    const result = await prisma.todoChannels.update({
      where: { todo_Channels_id: Channel_id },
      data: { todo_Channels_status: Channel_status },
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
