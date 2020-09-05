/* eslint-disable no-console */
const fs = require('fs');
const jsonNotes = require('./data.json');
jsonNotes.notes[process.argv[2]] = process.argv[3];

fs.writeFile('data.json', JSON.stringify(jsonNotes, null, 2), (err, data) => {
  if (err) throw err;
});
