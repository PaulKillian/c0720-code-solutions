/* eslint-disable no-console */
const fs = require('fs');
const jsonNotes = require('./data.json');

function addNote() {
  jsonNotes.notes[jsonNotes.nextID] = process.argv[3];
  jsonNotes.nextID++;
  fs.writeFile('data.json', JSON.stringify(jsonNotes, null, 2), (err, data) => {
    if (err) throw err;
  });
}

module.exports = addNote;
