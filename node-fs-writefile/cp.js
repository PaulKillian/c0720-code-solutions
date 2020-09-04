const fs = require('fs');

let copiedNote = null;

fs.readFile('note.txt', 'utf8', (err, data) => {
  if (err) throw err;
  copiedNote = data;
});

fs.writeFile('reminder.txt', copiedNote, err => {
  if (err) throw err;
});
