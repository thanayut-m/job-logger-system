const express = require("express");
const { createChannels } = require("../controllers/ChannelControllers");

const router = express.Router();

router.post(`/createChannels`, createChannels);

module.exports = router;
