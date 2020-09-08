/* eslint-disable no-console */
const fs = require('fs');
const jsonNotes = require('./data.json');

const updateNote = () => {
  jsonNotes.notes[process.argv[3]] = process.argv[4];
  fs.writeFile('data.json', JSON.stringify(jsonNotes, null, 2), (err, data) => {
    if (err) throw err;
    console.log(process.argv[2]);
  });
};

module.exports = updateNote;
