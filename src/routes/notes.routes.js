const { Router } = require('express');
const router = Router();

const {
  renderNotes,
  createNewNote,
  renderNotesForm,
  renderEditNotes,
  updateNotes,
  deleteNotes,
} = require('../controllers/notes.controller');
//new note
router.get('/notes/add', renderNotesForm);

router.post('/notes/new-note', createNewNote);
//get notes
router.get('/notes', renderNotes);

//edit notes
router.get('/notes/edit/:id', renderEditNotes);

router.put('/notes/edit/:id', updateNotes);

//delete notes
router.delete('/notes/edit/:id', deleteNotes);
module.exports = router;
