const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const { readdirSync } = require("fs");

const app = express();
const port = process.env.PORT;
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "10md" }));

readdirSync("./routes")
  .filter((file) => file.endsWith)
  .map((file) => {
    const routerName = file.replace(".js", "");
    try {
      const route = require("./routes/" + file);

      app.use(`/api/${routerName}`, route);

      console.log(`Loaded router : /api/${routerName}`);
    } catch (e) {
      console.log(`Error : ${e.message}`);
    }
  });

app.listen(port, () => console.log(`Server is Running Port : ${port}`));
