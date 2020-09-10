const express = require('express');
const notes = require('./data.json');
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening...');
});
