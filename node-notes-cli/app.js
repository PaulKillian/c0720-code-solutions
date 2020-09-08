const readNote = require('./read-note.js');
const addNote = require('./add-note.js');
const updateNote = require('./update-note.js');
const removeNote = require('./delete-note.js');

if (process.argv[2] === 'read') {
  readNote();
} else if (process.argv[2] === 'add') {
  addNote();
} else if (process.argv[2] === 'update') {
  updateNote();
} else if (process.argv[2] === 'remove') {
  removeNote();
}
