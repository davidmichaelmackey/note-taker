const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Notes Page");
});

router.get("/:id", (req, res) => {
  res.send(`Note ${req.params.id}`);
});

module.exports = router;