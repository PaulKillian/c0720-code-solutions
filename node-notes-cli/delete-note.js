/* eslint-disable no-console */
const fs = require('fs');
const jsonFile = require('./data.json');

const deleteNote = () => {
  delete jsonFile.notes[process.argv[3]];
  fs.writeFile('data.json', JSON.stringify(jsonFile, null, 2), (err, data) => {
    if (err) throw err;
  });
};

module.exports = deleteNote;
