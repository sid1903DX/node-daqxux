const notesControllers = {};
const Note = require('../models/Note');
notesControllers.renderNotesForm = (req, res) => {
  res.render('./notes/new-note');
};
notesControllers.createNewNote = async (req, res) => {
  const { title, description } = req.body;
  const newNote = new Note({ title: title, description: description });
  await newNote.save();
  res.send('n');
};
notesControllers.renderNotes = (req, res) => {
  res.send('render notes');
};
notesControllers.renderEditNotes = (req, res) => {
  res.send('edit notes');
};
notesControllers.updateNotes = (req, res) => {
  res.send('updates notes');
};
notesControllers.deleteNotes = (req, res) => {
  res.send('delete notes');
};

module.exports = notesControllers;
