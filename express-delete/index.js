const express = require('express');
const app = express();

const grades = [
  {
    id: 1,
    name: 'Paul',
    course: 'Math',
    grade: 90
  },
  {
    id: 2,
    name: 'Doug',
    course: 'Science',
    grade: 95
  }
];

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.delete('/api/grades/:id', (req, res) => {
  const paramsId = parseInt(req.params.id, 10);
  const index = grades.findIndex(grades => grades.id === paramsId);
  if (index === -1) {
    res.sendStatus(404);
  } else {
    grades.splice(index, 1);
    res.sendStatus(204);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening...');
});
