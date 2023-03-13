// import modules
const express = require('express');
const path = require('path');

// instance of the express router
const router = express.Router();

// Home page | GET request handler for root path
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Notes page | GET request handler for /notes path
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// exports router
module.exports = router;
