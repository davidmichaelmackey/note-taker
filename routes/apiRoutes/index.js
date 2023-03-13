// module imports
const express = require('express');
const notes = require('../../lib/notes');

// router instance
const router = express.Router();

// GET req handler for /notes path
// retrieves all notes
router.get('/notes', (req, res) => {
  const allNotes = notes.getAllNotes();
  res.json(allNotes);
});

// POST req handler for /notes path
// adds a new note
router.post('/notes', (req, res) => {
  const newNote = req.body;
  notes.addNewNote(newNote);
  res.json(newNote);
});

// DELETE req handler for /notes/:id path
// Delete a note by ID
router.delete('/notes/:id', (req, res) => {
  const noteId = req.params.id;
  notes.deleteNoteById(noteId);
  res.json({ message: `Note ${noteId} has been deleted` });
});

// exports router
module.exports = router;
