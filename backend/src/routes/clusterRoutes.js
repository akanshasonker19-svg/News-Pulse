const express = require("express");
const router = express.Router();

const {
  getClusterArticles,
} = require("../controllers/clusterController");

router.get("/:id", getClusterArticles);

module.exports = router;