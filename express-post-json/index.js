const grades = [];
let nextId = 1;

const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  res.status(201);
  req.body.id = nextId;
  grades.push(req.body);
  nextId++;
  res.json(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening...');
});
