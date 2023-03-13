const express = require('express');
const app = express();

// Set up middleware
app.use(express.static('public'));

// Import routers
const indexRouter = require('./routes/indexRouter');
const notesRouter = require('./routes/notesRouter');

// Use routers
app.use('/', indexRouter);
app.use('/notes', notesRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
