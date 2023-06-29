// Defining modules and paths
const fs = require("fs");
const path = require('path');

function newNote(body, array) {
    const note = body;
    array.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(array)
    )
    return note;
};

module.exports = { newNote };