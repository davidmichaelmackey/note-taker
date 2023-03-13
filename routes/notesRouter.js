const express = require('express');
const router = express.Router();
const path = require("path");

router.get('/', (req, res) => {
  res.render('views/notes.html');
});

router.get('/:id', (req, res) => {
  res.send(`Note ${req.params.id}`);
});

module.exports = router;