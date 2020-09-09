const express = require('express');
const app = express();

const students = [
  {
    id: 234,
    name: 'Gandolf',
    course: 'Wizardry',
    grade: 'A+'
  },
  {
    id: 1,
    name: 'Beeg Yoshi',
    course: 'Meming',
    grade: 9001
  }
];

app.get('/api/grades', function (req, res) {
  res.send(students);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening...');
});
