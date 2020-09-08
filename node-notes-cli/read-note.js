/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const fs = require('fs');
const jsonFile = require('./data.json');
const allNotes = jsonFile.notes;

const readNote = () => {
  for (const id in allNotes) {
    console.log(`${id}: ${allNotes[id]}`);
  }
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
  });
};

module.exports = readNote;
