const express = require('express');
const allNotes = require('./data.json');
const badRequest = require('./badrequest.json');
const notFound = require('./notfound.json');
const contentRequired = require('./contentrequired.json');
const unexpectedError = require('./unexpectederror.json');
const fs = require('fs');
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
  if (Object.keys(req.body).length === 0) {
    res.status(400);
    res.json(contentRequired);
  } else if (req.body !== ' ') {
    res.status(201);
    allNotes.notes[allNotes.nextId] = req.body;
    allNotes.nextId++;
    fs.writeFile('data.json', JSON.stringify(allNotes, null, 2), (err, data) => {
      if (err) throw err;
    });
    req.body.id = allNotes.nextId;
    res.json(req.body);
  } else {
    res.status(500);
    res.json(unexpectedError);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening...');
});
