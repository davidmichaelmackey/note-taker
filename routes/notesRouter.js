const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notes.js');

router.get('/', (req, res) => {
  res.sendFile('notes.html', { root: './public/views' });
});

router.post("/", (req, res) => {
  const newNote = {
    title: req.body.title,
    text: req.body.text,
  };
  const createdNote = notesController.createNote(newNote);
  res.json(createdNote);
});

router.get('/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const note = notesController.readNoteByIndex(index);
  if (note) {
    res.json(note);
  } else {
    res.status(404).send('Note not found');
  }
});

module.exports = router;