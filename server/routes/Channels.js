const express = require("express");
const {
  createChannels,
  channelInfo,
  updateStatusChannel,
  updateChannel,
} = require("../controllers/ChannelControllers");

const router = express.Router();

router.post(`/createChannels`, createChannels);
router.get(`/channelInfo`, channelInfo);
router.put("/updateChannel", updateChannel);
router.put("/updateStatusChannel", updateStatusChannel);

module.exports = router;
