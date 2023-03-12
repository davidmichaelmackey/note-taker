// Import required modules
const express = require("express");
const path = require("path");

// Create an instance of Express
const app = express();

// Routes
const indexRouter = require('./routes/indexRouter.js');
const notesRouter = require('./routes/notesRouter.js');

// Set up middleware for parsing incoming requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, './public/')));

// Define routes
app.use('/', indexRouter);
app.use('/notes', notesRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});