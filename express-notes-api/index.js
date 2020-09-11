const express = require('express');
const allNotes = require('./data.json');
const badRequest = require('./badrequest.json');
const notFound = require('./notfound.json');
const contentRequired = require('./contentrequired.json');
let nextId = 5;
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  if (allNotes.notes[1] === undefined) {
    res.json([]);
  }
  res.json(allNotes);
});

app.get('/api/notes/:id', (req, res) => {
  const paramsId = parseInt(req.params.id);
  const idInNotes = allNotes.notes;
  for (const id in idInNotes) {
    const number = parseInt(id);
    if (paramsId === number) {
      res.json(idInNotes[paramsId]);
    }
  }
  if (paramsId <= 0 || paramsId !== isNaN) {
    res.status(400);
    res.json(badRequest);
  } else {
    for (const id in idInNotes) {
      const number = parseInt(id);
      if (paramsId !== number) {
        res.status(404);
        res.json(notFound);
      }
    }
  }
});

app.post('/api/notes', (req, res) => {
  if (req.body === {}) {
    res.status(400);
    res.json(contentRequired);
  } else if (req.body !== ' ') {
    res.status(201);
    req.body.id = nextId;
    allNotes.notes[allNotes.nextId] = req.body;
    nextId++;
    res.json(req.body);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening...');
});
