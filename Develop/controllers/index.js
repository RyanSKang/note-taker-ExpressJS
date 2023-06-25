// Defining required modules/paths
const path = require('path');
const router = require('express').Router();

// HTML Routes to return notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// HTML routes to return index.html file
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports= router;