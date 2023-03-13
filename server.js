// import modules
const express = require('express');
const path = require('path');
// import server-side routes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
// create instance of express app
const app = express();
// sets port for server to listen on - first checks for env var or uses port '3000'
const PORT = process.env.PORT || 3000;

// Set up middleware for parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// serves static files from public directory
app.use(express.static('public'));

// Routes - sets up endpoints for handling requests
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start the server on specified port
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
