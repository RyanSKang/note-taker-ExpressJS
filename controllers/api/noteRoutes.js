// Defining module needed
const router = require('express').Router();
const { newNote } = require('../../utils/noteFunctions');
const db = require('../../db/db.json');
const uniqid = require('uniqid');

// GET routing '/notes' 
router.get('/notes', (req, res) => {
    let savedNotes = db;
    res.json(savedNotes);
})
 
// POST routing '/notes'
router.post('/notes', (req, res) => {
    // console.log(db);
    // console.log(db.length);
    req.body.id = uniqid();

    // { "titel": "test title", "text": "test text", "id": 2}

    let newNotes = newNote(req.body, db);
    res.json(newNotes);
});


// Exporting
module.exports = router;