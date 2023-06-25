// Defining module needed
const router= require('express').Router();
const {newNote} = require('../../utils/noteFunctions');
const db= require('../../db/db.json');
const notes= require('../../db/db.json')

// GET routing '/notes' 
router.get('/notes', (req,res) => {
    let savedNotes = notes;
    res.json(savedNotes);
})

// POST routing '/notes'
router.post('/notes', (req, res) => {
    req.body.id=notes.length.toString(); 
    let newNotes = newNote(req.body, notes);
    res.json(newNotes);
});


// Exporting
module.exports= router;