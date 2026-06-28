const express = require("express");
const cors = require("cors");

const articleRoutes = require("./routes/articleRoutes");
const clusterRoutes = require("./routes/clusterRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/articles", articleRoutes);
app.use("/clusters", clusterRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "News Pulse API Running 🚀",
  });
});

module.exports = app;