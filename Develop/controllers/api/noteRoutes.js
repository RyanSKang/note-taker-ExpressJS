// Defining module needed
const router= require('express'.Router());
const db= require('../../db/db.json');
const notes= require('../../db/db.json')
const {newNote} = require('../../utils/noteFunctions');

// GET routing '/notes' 
router.get('/notes', (req,res) => {
    let savedNotes = notes;
    res.json(savedNotes);
})

// POST routing '/notes'
router.post('/notes', (req, res) => {
    req.body.id=notes.length.toString(); 
    let newNote = newNote(req.body, notes);
    res.json(newNote);
});


// Exporting
module.exports= router;