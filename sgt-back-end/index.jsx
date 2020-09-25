const express = require('express');
const pg = require('pg');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:lfz@localhost/studentGradeTable'
});

app.use(express.json());

app.get('/api/grades', (req, res, next) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      if (!grades) {
        res.status(500).json({
          error: 'Cannot'
        });
      } else {
        res.json(grades);
      }
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening...');
});
