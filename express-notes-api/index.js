const express = require('express');
const allNotes = require('./data.json');
const badRequest = require('./badrequest');
const contentRequired = require('./contentrequired');
const fs = require('fs');
const app = express();

app.use(express.json());

app.get('/api/notes', (req, res) => {
  const notes = [];
  for (const id in allNotes.notes) {
    const note = allNotes.notes[id];
    notes.push(note);
  }
  res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
  const paramsId = parseInt(req.params.id, 10);
  if (!Number.isInteger(paramsId) || paramsId <= 0) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }
  const note = allNotes.notes[paramsId];
  if (typeof note === 'undefined') {
    res.status(404).json({
      error: `cannot find note with id ${paramsId}`
    });
    return;
  }
  res.json(note);
});

app.post('/api/notes', (req, res, err) => {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }
  const note = {
    id: allNotes.nextId,
    content: req.body.content
  };
  allNotes.notes[allNotes.nextId] = note;
  const json = JSON.stringify(allNotes, null, 2);
  fs.writeFile('data.json', json, err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
      return;
    }
    res.status(201).json(note);
  });
});

app.delete('/api/notes/:id', (req, res, err) => {
  const paramsId = parseInt(req.params.id, 10);
  if (!Number.isInteger(paramsId) || paramsId <= 0) {
    res.status(400);
    res.json(badRequest);
    return;
  }
  if (allNotes.notes[paramsId] === undefined) {
    res.status(404).json({
      error: `cannot find note with id ${paramsId}`
    });
    return;
  }

  delete allNotes.notes[paramsId];
  const json = JSON.stringify(allNotes, null, 2);
  fs.writeFile('data.json', json, err => {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
      return;
    }
    res.sendStatus(204);
  });
});

app.put('/api/notes/:id', (req, res) => {
  const paramsId = parseInt(req.params.id, 10);
  const idInNotes = allNotes.notes;
  if (paramsId <= 0 || Object.keys(req.body).length === 0) {
    res.status(400);
    res.json(contentRequired);
    return;
  }
  if (paramsId === idInNotes[paramsId].id && req.body !== '' && idInNotes[paramsId] === undefined) {
    res.status(404).json({
      error: `cannot find note with id ${paramsId}`
    });
    return;
  }
  idInNotes[paramsId] = req.body;
  req.body.id = paramsId;
  if (paramsId === idInNotes[paramsId].id && req.body !== '') {
    const json = JSON.stringify(allNotes, null, 2);
    fs.writeFile('data.json', json, err => {
      if (err) {
        console.error(err);
        res.status(500).json({
          error: 'An unexpected error occurred.'
        });
      }
    });
  }
  res.sendStatus(200);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening...');
});
