/* eslint-disable no-console */
const fs = require('fs');
const jsonFile = require('./data.json');

fs.readFile('./data.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(jsonFile.nextID + ':', jsonFile.notes[1]);
});
