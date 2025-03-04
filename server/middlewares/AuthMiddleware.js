const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.isLogin = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "No token, authorization denied" });
    }

    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decode.user || decode;
    // console.log(req.user);
    next();
  } catch (error) {
    console.log(e.message);
    res.status(401).send("token invalid !!");
  }
};
