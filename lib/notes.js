// module imports
// for writing files
const fs = require('fs');
// gets file path
const path = require('path');
// sets path for db file
const dbFilePath = path.join(__dirname, '../db/db.json');

// reads the db file and returns all notes in the JSON format
function getAllNotes() {
  const notesData = fs.readFileSync(dbFilePath, 'utf8');
  return JSON.parse(notesData);
}

// receives a new note object as input and adds it to the db file
function addNewNote(newNote) {
  const notesData = getAllNotes();
  newNote.id = Math.floor(Math.random() * 1000);
  notesData.push(newNote);
  fs.writeFileSync(dbFilePath, JSON.stringify(notesData));
}

// receives a note ID as input and deletes the corresponding note from the db file
function deleteNoteById(noteId) {
  const notesData = getAllNotes();
  const filteredNotes = notesData.filter((note) => note.id !== parseInt(noteId));
  fs.writeFileSync(dbFilePath, JSON.stringify(filteredNotes));
}

// exports functions
module.exports = {
  getAllNotes,
  addNewNote,
  deleteNoteById
};
