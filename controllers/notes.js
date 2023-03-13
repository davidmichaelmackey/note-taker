// Handles all CRUD operations (Create, Read, Update, and Delete)

const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'db', 'db.json');

// Read all notes
function readNotes() {
  const data = fs.readFileSync(dbPath, 'utf8');
  return JSON.parse(data);
}

// Create a new note
function createNote(note) {
  const notes = readNotes();
  const newNote = { ...note };
  notes.push(newNote);
  fs.writeFileSync(dbPath, JSON.stringify(notes));
  return newNote;
}

// Read a note by ID
function readNoteById(id) {
  const notes = readNotes();
  return notes.find(note => note.id === id);
}

// Update a note by ID
function updateNoteById(id, updates) {
  const notes = readNotes();
  const index = notes.findIndex(note => note.id === id);
  if (index !== -1) {
    notes[ index ] = { ...notes[ index ], ...updates };
    fs.writeFileSync(dbPath, JSON.stringify(notes));
    return notes[ index ];
  }
  return null;
}

// Delete a note by ID
function deleteNoteById(id) {
  const notes = readNotes();
  const index = notes.findIndex(note => note.id === id);
  if (index !== -1) {
    notes.splice(index, 1);
    fs.writeFileSync(dbPath, JSON.stringify(notes));
    return true;
  }
  return false;
}

module.exports = { readNotes, createNote, readNoteById, updateNoteById, deleteNoteById };