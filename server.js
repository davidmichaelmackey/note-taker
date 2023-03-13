const express = require('express');
const path = require('path');
const indexRouter = require('./routes/indexRouter');
const notesRouter = require('./routes/notesRouter');

const app = express();

app.set('views', path.join(__dirname, 'public', 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/notes', notesRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}/`);
});